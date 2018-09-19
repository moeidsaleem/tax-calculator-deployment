document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll("button[data-action='next']"),
      buttonsPrev = document.querySelectorAll("button[data-action='prev']"),
      sections = document.querySelectorAll("section[data-section]"),
      buttonMute = document.querySelector("button[data-mute]"),
      inputs = document.querySelectorAll("input"),
      slider = document.querySelector(".slider"),
      form = document.querySelector("form"),
      progress = document.getElementById("progress-bar-inner"),
      passwordField = document.getElementById("password"),
      meter = document.getElementById("password-strength-meter"),
      speakingEnabled = localStorage.getItem("speakingEnabled") || false,
      index = 0;
  
  
  
  handleNextSlide();
  updateMuteButton();
  
  
  /**
   * If the validation passes, handles all the logic
   * to show the next slide. Sets the focus to the next input,
   * reads the text, updates the progress bar and more.
   */
  function handleNextSlide() {
    if (index <= sections.length - 1) {
      
      responsiveVoice.cancel();
      
      if (index > 1 && !inputIsValid(sections[index - 1])) {
        return false;
      }
      
      setFocus(sections[index]);
      speak(sections[index].dataset.message);
      showNextSlide();
      updateProgress();
    
      index++;
    }
  }
  
  
  
  
  /**
   * Goes back one slide and sets the index accordingly.
   */
  function handlePrevSlide() {
    responsiveVoice.cancel();
    
    slider.style.transform = `translateX(-${35 * (index - 2)}rem)`;
    
    index--;
  }
  
  
  
  /**
   * Updates the progress bar on the top
   * to inform the user about how much slides
   * are missing.
   */
  function updateProgress() {
    progress.style.width = `${index * 100 / (sections.length - 1)}%`;
  }
  
  
  
  /**
   * Checks whether a input is valid or not.
   * 
   * @return boolean Returns true if input passes all tests
   *    or false if there are any errors.
   */
  function inputIsValid(section) {
    var input = section.querySelector("input");
    
    if (!input || input.checkValidity()) {
      return true;
    }
    
    showError(input);
  }
  
  
  
  /**
   * Shows validation errors below the input
   * to the user.
   */
  function showError(input) {
    if (!input.nextElementSibling.classList.contains("form-error")) {
      var message = document.createElement("p");
    
      message.className = "form-error";
      message.textContent = input.dataset.errorMessage;

      input.parentNode.insertBefore(message, input.nextSibling);
      
      speak(input.dataset.errorMessage);
    }
  }
  
  
  
  /**
   * Shows the next slide by moving the slide container
   * to the left. All slides are aligned next to each other
   * horizontally.
   */
  function showNextSlide() {
    if (index > 0) {
      slider.style.transform = `translateX(-${35 * index}rem)`;
    }
  }
  
  
  
  /**
   * Sets the focus to the following input after 500ms and checks
   * if there's a registered hook. If the there is one,
   * execute it.
   */
  function setFocus(section) {
    var input = section.querySelector("input");
    
    if (input) {
      setTimeout(() => input.focus(), 500);
      
      switch(input.dataset.hook) {
        case "setUsername":
          setUsername();
          break;
      }
    }
  }
  
  
  
  /**
   * Sets the username based on the user's first
   * and last name, like this:
   *
   * `firstname.lastname`
   */
  function setUsername() {
    var firstname = document.getElementById("firstname").value.trim().split(/\s/)[0].toLowerCase(),
        lastname = document.getElementById("lastname").value.trim().split(/\s/)[0].toLowerCase(),
        username = document.getElementById("username"); 
    
    username.value = `${firstname}.${lastname}`;
  }
  
  
  
  /**
   * Speaks to the user using responsiveVoiceJS and the
   * HTML5 Web Speech API.
   * Only speaks when the user enabled this features.
   */
  function speak(text) {
    if (speakingEnabled == "true") {
      responsiveVoice.speak(text, "UK English Male");
    }
  }
  
  
  
  /**
   * Enables / disables the speech support.
   * The configuration is persisted in localStorage.
   */
  function toggleSpeaking() {
    speakingEnabled = !speakingEnabled;
    
    localStorage.setItem("speakingEnabled", speakingEnabled);
    
    updateMuteButton();
    
    if (!speakingEnabled) {
      responsiveVoice.cancel();
    }
  }
  
  
  
  /**
   * Updates the mute button's icon.
   */
  function updateMuteButton() {
    buttonMute.querySelector("use").setAttribute("xlink:href", `${localStorage.getItem("speakingEnabled") == "true" ? "#volume" : "#muted"}`);
  }
  
  
  
  /**
   * Prevents the form from submitting.
   */
  function handleSubmit(event) {
    event.preventDefault();
  }
  
  
  
  /**
   * Shows the password strength to the user
   * using the zxcvbn library from Dropbox.
   */
  function indicatePasswordStrength() {
    var result = zxcvbn(this.value);

    meter.dataset.strength = result.score;
  }
  
  
  
  /**
   * Prevents the form from submitting when the user
   * presses the Enter key. Instead clicks the `Next` button.
   */
  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      
      this.parentNode.parentNode.querySelector("button").click();
    }
  }
  
  
  
  /**
   * Registers all event listeners.
   */
  buttons.forEach(button => button.addEventListener("click", handleNextSlide));
  buttonsPrev.forEach(button => button.addEventListener("click", handlePrevSlide));
  buttonMute.addEventListener("click", toggleSpeaking);
  form.addEventListener("submit", handleSubmit);
  password.addEventListener("input", indicatePasswordStrength);
  inputs.forEach(input => input.addEventListener("keypress", handleKeyPress));
});