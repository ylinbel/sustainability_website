function game() {
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new bootstrap.Toast(toastLiveExample)

      toast.show()
    })
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function rndInt() {
  let rndInt = Math.floor(Math.random() * 11);
  console.log(rndInt)

  let x = rndInt;

  var msgEl = document.getElementById("displayMsg");
  msgEl.innerHTML = "";

  if (x === 0) {
    msgEl.innerHTML = "Only 1% world's water is available for human use.";
  } else if (x === 1) {
    msgEl.innerHTML = "It takes 100 years for Carbon Dioxide in the atmosphere to disperse.";
  } else if (x === 2) {
    msgEl.innerHTML = "Petroleum is NOT renewable.";
  } else if (x === 3) {
    msgEl.innerHTML = "It takes 400 years for a Styrofoam cup to decompose.";
  } else if (x === 4) {
    msgEl.innerHTML = "There will be more plastic in our oceans than fish by 2050.";
  } else if (x === 5) {
    msgEl.innerHTML = "About eight million tonnes of plastic are dumped in the ocean each year.";
  } else if (x === 6) {
    msgEl.innerHTML = " The global temperature has increased by about 1°C in the last 100 years.";
  } else if (x === 7) {
    msgEl.innerHTML = "Sea levels have risen by nearly 10cm in the last 25 years.";
  } else if (x === 8) {
    msgEl.innerHTML = "Scientists believe that up to 50% of the world’s species will be extinct by the end of this century.";
  } else if (x === 9) {
    msgEl.innerHTML = "Approximately 83% of the earth’s land surface has been affected by human activity, threatening plant and animal species.";
  } else if (x === 10) {
    msgEl.innerHTML = "Approximately 25% of the world’s coral reefs have been irreversibly destroyed.";
  }


  T
};

function expand() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}




function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    const notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
      }
    });
  }
}




function sayhi() {
  let name = prompt("Hi, what's your name?");
  if (name === null) {
    alert('Welcome!');
  } else {
    alert('Welcome ' + name + '!');
  }
}

function goToCal() {
  let message = prompt("Hi, Do you need any help? Please leave a message!");

  alert('Thanks for contacting us!');

}

var explore = document.getElementById("explore");

explore.addEventListener('mouseenter', function (event) {
  event.target.style.color = '#A901DB';
})

explore.addEventListener('mouseleave', function (event) {
  event.target.style.color = 'gray';
})

let animation = anime({
  targets: '#rod',
  rotate: [60, -60],
  duration: 3000,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});




