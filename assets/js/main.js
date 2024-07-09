//button trigger notification sound and update queue no status = 1
function queueNowSub_dealer() {
    $.ajax({
        url: 'queries/action.php?action=update_queueSub_dealer',
        success: function(resp) {
            try {
                resp = JSON.parse(resp);
                if (resp.status === 1 && resp.data) {
                    //$('#squeueSub_dealer').html(resp.data.QueueNumber || '');
                    console.log('mayda');

                        var notificationSound = document.getElementById('notificationSound');
                        notificationSound.play();

                        setTimeout(function() {
                            var utterance = new SpeechSynthesisUtterance('Calling the attention of customer with queue number ' + resp.data.QueueNumber + '. Please proceed to sub-dealer lane.');
                            utterance.lang = 'en-US';
                            utterance.volume = 1; // Volume range is from 0 to 1
                            utterance.rate = 0.8;
                            utterance.pitch = 1;
                            
                            // Ensure voices are loaded
                            var voices = window.speechSynthesis.getVoices();
                            if (voices.length === 0) {
                                // Re-populate voices if not loaded yet
                                window.speechSynthesis.onvoiceschanged = function() {
                                    voices = window.speechSynthesis.getVoices();
                                    utterance.voice = voices.find(voice => voice.name === 'Microsoft David - English (United States)');
                                    if (!utterance.voice) {
                                        console.warn('Specific voice not found, using default voice');
                                    }
                                    window.speechSynthesis.speak(utterance);
                                };
                            } else {
                                utterance.voice = voices.find(voice => voice.name === 'Microsoft David - English (United States)');
                                if (!utterance.voice) {
                                    console.warn('Specific voice not found, using default voice');
                                }
                                window.speechSynthesis.speak(utterance);
                            }
                        }, 2000);
                        

                } else if (resp.status === 0) {
                    // Handle case when no data is found
                    console.log('No data found.');
                    Swal.fire({
                        title: "NO TICKET FOUND",
                        text: "AS OF TODAY",
                        icon: "info"
                    });
                } else {
                    // Handle unexpected response
                    console.error('Invalid response:', resp);
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        },
        error: function(xhr, status, error) {
            //console.error('AJAX Error:', status, error);
        }
    });
}

//button trigger notification sound and update queue no status = 1
function queueNowVolume() {
    $.ajax({
        url: 'queries/action.php?action=update_queueVolume',
        success: function(resp) {
            try {
                resp = JSON.parse(resp);
                if (resp.status === 1 && resp.data) {
                    //$('#squeueVolume').html(resp.data.QueueNumber || '');

                    console.log('mayda');

                    var notificationSound = document.getElementById('notificationSound');
                    notificationSound.play();

                    setTimeout(function() {
                        var utterance = new SpeechSynthesisUtterance('Calling the attention of customer with queue number ' + resp.data.QueueNumber + '. Please proceed to volume lane.');
                        utterance.lang = 'en-US';
                        utterance.volume = 1; // Volume range is from 0 to 1
                        utterance.rate = 0.8;
                        utterance.pitch = 1;
                        
                        // Ensure voices are loaded
                        var voices = window.speechSynthesis.getVoices();
                        if (voices.length === 0) {
                            // Re-populate voices if not loaded yet
                            window.speechSynthesis.onvoiceschanged = function() {
                                voices = window.speechSynthesis.getVoices();
                                utterance.voice = voices.find(voice => voice.name === 'Microsoft David - English (United States)');
                                if (!utterance.voice) {
                                    console.warn('Specific voice not found, using default voice');
                                }
                                window.speechSynthesis.speak(utterance);
                            };
                        } else {
                            utterance.voice = voices.find(voice => voice.name === 'Microsoft David - English (United States)');
                            if (!utterance.voice) {
                                console.warn('Specific voice not found, using default voice');
                            }
                            window.speechSynthesis.speak(utterance);
                        }
                    }, 2000);

                } else if (resp.status === 0) {
                    // Handle case when no data is found
                    console.log('No data found.');
                    Swal.fire({
                        title: "NO TICKET FOUND",
                        text: "AS OF TODAY",
                        icon: "info"
                    });
                } else {
                    // Handle unexpected response
                    console.error('Invalid response:', resp);
                }
            } catch (error) {
                //console.error('Error parsing JSON:', error);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', status, error);
        }
    });
}

//button trigger notification sound and update queue no status = 1
function queueNowFast() {
    $.ajax({
        url: 'queries/action.php?action=update_queueFast',
        success: function(resp) {
            try {
                resp = JSON.parse(resp);
                if (resp.status === 1 && resp.data) {
                    //$('#squeueFast').html(resp.data.QueueNumber || '');

                    console.log('mayda');

                    var notificationSound = document.getElementById('notificationSound');
                    notificationSound.play();

                    setTimeout(function() {
                        var utterance = new SpeechSynthesisUtterance('Calling the attention of customer with queue number ' + resp.data.QueueNumber + '. Please proceed to fast lane.');
                        utterance.lang = 'en-US';
                        utterance.volume = 1; // Volume range is from 0 to 1
                        utterance.rate = 0.8;
                        utterance.pitch = 1;
                        
                        // Ensure voices are loaded
                        var voices = window.speechSynthesis.getVoices();
                        if (voices.length === 0) {
                            // Re-populate voices if not loaded yet
                            window.speechSynthesis.onvoiceschanged = function() {
                                voices = window.speechSynthesis.getVoices();
                                utterance.voice = voices.find(voice => voice.name === 'Microsoft David - English (United States)');
                                if (!utterance.voice) {
                                    console.warn('Specific voice not found, using default voice');
                                }
                                window.speechSynthesis.speak(utterance);
                            };
                        } else {
                            utterance.voice = voices.find(voice => voice.name === 'Microsoft David - English (United States)');
                            if (!utterance.voice) {
                                console.warn('Specific voice not found, using default voice');
                            }
                            window.speechSynthesis.speak(utterance);
                        }
                    }, 2000);

                } else if (resp.status === 0) {
                    // Handle case when no data is found
                    console.log('No data found.');
                    Swal.fire({
                        title: "NO TICKET FOUND",
                        text: "AS OF TODAY",
                        icon: "info"
                    });
                } else {
                    // Handle unexpected response
                    console.error('Invalid response:', resp);
                }
            } catch (error) {
                //console.error('Error parsing JSON:', error);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', status, error);
        }
    });
}

//insert funcation for checker today
function setChecker1() {
    var selectElement = document.getElementById('checker1');
    var selectedCheckerId1 = selectElement.value;

    // Send the selected checker ID to the server-side script using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'queries/Checker/setChecker1.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle response from the server if needed
            console.log(xhr.responseText);
        }
    };
    xhr.send('checker_id=' + encodeURIComponent(selectedCheckerId1));
}

//insert funcation for checker today
function setChecker2() {
    var selectElement = document.getElementById('checker2');
    var selectedCheckerId2 = selectElement.value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'queries/Checker/setChecker2.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send('checker_id=' + encodeURIComponent(selectedCheckerId2));
}

//insert funcation for checker today
function setChecker3() {
    var selectElement = document.getElementById('checker3');
    var selectedCheckerId3 = selectElement.value;   

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'queries/Checker/setChecker3.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send('checker_id=' + encodeURIComponent(selectedCheckerId3));
}


//search function
$(document).ready(function() {
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
            return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

    $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
        $(this).attr('visible','false');
    });

    $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
        $(this).attr('visible','true');
    });

    var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

    if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
    });
});


