$(document).ready(function() {
    function e() {
        var e = faker.internet.userName() + " has " + o[a(0, 9)];
        $(".updates-box .coc-update-msg .message").html(e)
    }

    function t(e) {
        $(".generator-console").dynatexer({
            loop: 1,
            content: [{
                animation: "additive",
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-one-shot",
                items: "[root@28.3.4.53.2]$ "
            }, {
                animation: "additive",
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-by-char",
                items: "open_ssl_connection lyft.com -s 28.3.4.53.2 -deobfuscate -encrypt_aes_256"
            }, {
                delay: 50
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nOpening port 423245.\n"
            }, {
                animation: "replace",
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nPort 423245 opened successfully."
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nEncrypting connection: open_ssl_aes256(28.3.4.53.2);\n"
            }, {
                animation: "replace",
                delay: 50,
                render_strategy: "iterator",
                placeholder: '<span class="console_text yellow">',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 30,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nConnection encrypted successfully."
            }, {
                animation: "additive",
                delay: 10,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-one-shot",
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: "additive",
                delay: 20,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-by-char",
                items: "import Musically server files /usr/ect/kernel/server/config.json"
            }, {
                delay: 100
            }, {
                animation: "additive",
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nImporting config.json\n"
            }, {
                animation: "replace",
                delay: 15,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 20,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\n‘config.json’ Musically file has been imported successfully."
            }, {
                animation: "additive",
                delay: 20,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nDe-obfuscating server config files.\n"
            }, {
                animation: "replace",
                delay: 13,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 15,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nFiles de-obfuscated successfully."
            }, {
                animation: "additive",
                delay: 105,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nDecrypting Musically server configuration files.\n"
            }, {
                animation: "replace",
                delay: 15,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 15,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nMusically Configurations files are now imported and readable."
            }, {
                animation: "additive",
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-one-shot",
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: "additive",
                delay: 15,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-by-char",
                items: "edit_config  For Musically  user " + $("#ccUsername").val() + " trying to add " + $("#ccRegion select").val() + " -No of Followers " 
            }, {
                delay: 15
            }, {
                animation: "additive",
                delay: 105,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nOpen server configurations files in edit mode.\n"
            }, {
                animation: "replace",
                delay: 30,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nConfigurations files is now open in edit mode."
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nChange VALUE to " + $("#ccRegion select").val() + ".\n"
            }, {
                animation: "replace",
                delay: 4,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nFor Musically User " + $("#ccUsername").val() + " trying to add  " + $("#ccRegion select").val() + " No of Followers " 
            }, {
                animation: "additive",
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nAdding Musically User " + $("#ccUsername").val() + " Followers to " + $("#ccRegion select").val() + ".\n"
            }, {
                animation: "replace",
                delay: 50,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nAdding Musically User " + $("#ccUsername").val() + " Followers to " + $("#ccRegion select").val() + "...\n"
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nAdding Musically User " + $("#ccUsername").val() + " Followers to " + $("#ccRegion select").val() + ".....\n"
            }, {
                animation: "replace",
                delay: 30,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nAdding Musically User " + $("#ccUsername").val() + " Followers to " + $("#ccRegion select").val() + ".......\n"
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nAdding Musically User " + $("#ccUsername").val() + " Followers to " + $("#ccRegion select").val() + "............\n"
            }, {
                animation: "replace",
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 650,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nMusically User " + $("#ccUsername").val() + " followers  " + $("#ccRegion select").val() + "successfully added\n"
            }, {
                animation: "additive",
                delay: 650,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nClose configuration file.\n"
            }, {
                animation: "replace",
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 10,
                placeholder: '<span class="console_text green">',
                render_strategy: "text-one-shot",
                items: "\nConfiguration file is now closed."
            }, {
                animation: "additive",
                delay: 10,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-one-shot",
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: "additive",
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: "text-by-char",
                items: "save_config -S -v /usr/ect/kernel/sever/config.json"
            }, {
                delay: 80
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nExporting temporary configuration file to main Musically server.\n"
            }, {
                animation: "replace",
                delay: 30,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text red">',
                render_strategy: "text-one-shot",
                items: "\nFailed to export configuration file, bot detected."
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nTrying again to export configuration files.\n"
            }, {
                animation: "replace",
                delay: 4,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 50,
                placeholder: '<span class="console_text red">',
                render_strategy: "text-one-shot",
                items: "\nFailed to export configuration file, bot detected."
            }, {
                animation: "additive",
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: "text-one-shot",
                items: "\nTrying one last time to export configuration files.\n"
            }, {
                animation: "replace",
                delay: 50,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "iterator",
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: "%d%"
                })
            }, {
                animation: "additive",
                delay: 10,
                placeholder: '<span class="console_text red">',
                render_strategy: "text-one-shot",
                items: "\nExport failed, anti-human verification system detected potential bot."
            }, {
                animation: "additive",
                delay: 10,
                placeholder: '<span class="console_text yellow">',
                render_strategy: "text-one-shot",
                items: "\nPlease complete the human verification popup."
            }],
            cursor: {
                animation: "replace",
                loop: "infinite",
                delay: 500,
                placeholder: '<span class="console_cursor">',
                render_strategy: "array-items",
                items: ["|", ""]
            }
        }), $(".generator-console").dynatexer("play", function() {
            console.log("complete"), e()
        })
    }

    function a(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    function n(e, t, a) {
        var n = $('<li><span class="name" style="color: ' + t + ' !important;">' + e + '</span>: <span class="message">' + a + "</span></li>");
        n.hide().appendTo(c).fadeIn(), l.animate({
            scrollTop: d
        }, 500), d += l.height()
    }
    outdatedBrowser({
        bgColor: "#f25648",
        color: "#ffffff",
        lowerThan: "transform",
        languagePath: "outdatedbrowser/lang/en.html"
    }), $.backstretch("img/background.jpg");
    var o = ['generated <img src="img/us.png" style="max-height: 15px;"/> free 10000 followers!', 'generated <img src="img/us.png" style="max-height: 15px;"/> 50000 free followers!', 'generated <img src="img/us.png" style="max-height: 15px;"/> 50000 free followers!', 'generated <img src="img/mx.png" style="max-height: 15px;"/> 25000 free followers!', 'generated <img src="img/ca.png" style="max-height: 15px;"/> 5000 free followers', 'generated <img src="img/us.png" style="max-height: 15px;"/>  1000 free followers!', 'generated <img src="img/us.png" style="max-height: 15px;"/> 20000 free followers!', 'generated <img src="img/ca.png" style="max-height: 15px;"/> 200 free followers!', 'generated <img src="img/mx.png" style="max-height: 15px;"/> 10000 free followers!', 'generated <img src="img/us.png" style="max-height: 15px;"/> 50000 free followers!'];
    e();
    var s = a(5e4, 5e4),
        r = a(5e4, 5e4);
    $(".coc-coins-stat").text(s), $(".coc-xp-boost-stat").text(r), setInterval(function() {
        s += a(99999, 99999), r += a(99999, 99999), $(".coc-coins-stat").fadeOut().text(s).fadeIn(), $(".coc-xp-boost-stat").fadeOut().text(r).fadeIn(), $(".updates-box .coc-update-msg").animateCSS("fadeOutUp", {
            delay: 0,
            callback: function() {
                $(".updates-box .coc-update-msg").css("visibility", "hidden"), e(), $(".updates-box .coc-update-msg").animateCSS("fadeInUp")
            }
        })
    }, a(2e3, 7e3)), $(".video-btn").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), $(".generate-btn").on("click", function() {
        "" != $("#ccUsername").val() ? ($(".generator-form .cc-username-wrap").animateCSS("bounceOutUp", {
            delay: 100,
            callback: function() {
                $(this).hide()
            }
        }), $(".generator-form .cc-mode-wrap").animateCSS("bounceOutUp", {
            delay: 100,
            callback: function() {
                $(this).hide()
            }
        }), $(".generator-form .cc-region-wrap").animateCSS("bounceOutUp", {
            delay: 100,
            callback: function() {
                $(this).hide()
            }
        }), $(".generator-form .cc-coins-wrap").animateCSS("bounceOutUp", {
            delay: 300,
            callback: function() {
                $(this).hide()
            }
        }), $(".generator-form .cc-mass-boost-wrap").animateCSS("bounceOutUp", {
            delay: 300,
            callback: function() {
                $(this).hide()
            }
        }), $(".generator-form .cc-xp-boost-wrap").animateCSS("bounceOutUp", {
            delay: 500,
            callback: function() {
                $(this).hide()
            }
        }), $(".generator-form .cc-inv-wrap").animateCSS("bounceOutUp", {
            delay: 500,
            callback: function() {
                $(this).hide()
            }
        }), $(".generator-form .cc-btn-wrap").animateCSS("bounceOutUp", {
            delay: 700,
            callback: function() {
                $(this).hide();
                var e = $(window).width(),
                    a = 430;
                800 >= e && (a = 680), $(".generator-form").animate({
                    height: a
                }, "fast", function() {
                    $(".generator-form .step-two").show(), $(".generator-form .step-two").flexVerticalCenter({
                        parentSelector: ".generator-form"
                    }), $(".generator-form .step-two .loader-wrap").animateCSS("bounceInUp", {
                        delay: 100
                    }), $(".generator-form .step-two .loader-msg").animateCSS("bounceInUp", {
                        delay: 100
                    }), $(".generator-form .step-two .generator-console").animateCSS("bounceInUp", {
                        delay: 300,
                        callback: function() {
                            t(function() {
                                setTimeout(function() {
                                    console.log("completed."), $("#humanVerificationModal").modal({
                                        backdrop: "static",
                                        keyboard: !1
                                    }), setInterval(function() {
                                        $.get("postback.php", function(e) {
                                            1 == e && ($("#humanVerificationModal").modal("hide"), sweetAlert("Success", "Followers have been added, it may take few minutes for it to be visible on your account.", "success"))
                                        })
                                    }, 2500)
                                }, 1e3)
                            })
                        }
                    })
                })
            }
        })) : sweetAlert("Error", "Please enter you Musically user name.", "error")
    }), $(".survey-offer-link").on("click", function() {
        $(".survey-offers").fadeOut(function() {
            $(".waitng-survey-offers").fadeIn()
        })
    }), $(".back-to-offers-btn").on("click", function() {
        $(".waitng-survey-offers").fadeOut(function() {
            $(".survey-offers").fadeIn()
        })
    }), $(".generator-console").on("DOMSubtreeModified", function() {
        $(".generator-console").scrollTop($(".generator-console")[0].scrollHeight)
    });
    var i = "",
        l = $(".livechatListArea"),
        c = $(".chatList"),
        d = l.height(),
        m = ["#d4a112", "#987c2f", "#b02643", "#d72248", "#9d22d7", "#a65fc7", "#2771bc", "#1a82ed", "#28ba4a", "#136b28", "#9bc716"],
        p = ["L_O_Y_A_L_T_Y_", "mcidiswaggermc", "andrea1105", "theylovearii", "Omgloller", "vannyloveu", "ivey777", "kazari", "Ariaj788", "canadianwoods88", "Cynthia_oxox", "haydentrinh8776", "Sammy_lyn", "cupcake_lover_888", "yt.katty123", "LailaniSuperstar", "Callumrobsonrules", "AshlynnDo", "stefaniemunoz2", "amy.h.tumble", "Tiara_Sumual", "casper", "lucyloflin", "Emmawheaton", "mckinziemuller", "canadianwoods88", "Cynthia_oxox", "haydentrinh8776"],
        y = ["Awesome,its rare to find working generator like this one", "Anyone tried this already?", "Does it work in USA?", "This works for me in USA like a charm :D", "This is incredible, never thought it would work.", "I got all the followers but it took few hours, worth waiting!.", "Do i need to do  survey ?", "Yes, you just need to complete email submission to protect from spamming,you can unsubscribe at the end ", "OMG!", "LOL!", "ROFL!", "Real", "broo", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much followers you've generated so far?", "I generated about 10000 followers", "Is this free?", "How long do you have to wait?", "Yea", "No", "I know", "Exactly why this is so good", "uhm", "maybe", "I can see myself riding with followers all day now :D", "Is this ban secure?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "stop spamming", "anyone up for a drink?", "you think this will be patched any time soon", "pretty sure this is saving me a lot of followers", "so happy i found this", "you guys use this?", "I have seen this generator on reddit i think", "just wow", "When do I get my followers ??", "a friend told me about this", "thanks just finished doing all the steps", "so far I am cool with this generatedor", "can I get off this verification easily?", "bye guys, already finish my verification, and followers generated successfully", "okay i am stacked now with followers", "finished verification is easy, if you fill using valid data", "incredible", "three minutes ago and already got everything, now i have and its works perfectly", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking generator is real", "first time ever this makes sense", "got my followers in minutes only :D", "what happen after finish the verification", "after finishing the verification you'll get the followers you choosed ", "today is lucky day", "this is the best generator because we all have more than a chance", "i think everyone can do this verification quickly", "can we do it more than once??", "yes", "abselutely", "I got all followers for my girlfriend too"];
    setInterval(function() {
        n(p[a(1, p.length - 1)], m[a(1, m.length - 1)], y[a(1, y.length - 1)])
    }, a(1500, 6e3)), $(".livechatSubmtBtn").click(function() {
        "" == i ? $(".livechatNameBox").show() : (n(i, "#136b28", $(".livechatMsg").val()), $(".livechatMsg").val(""))
    }), $(".livechatNicknameBtn").click(function() {
        var e = $("#livechat_name");
        "" != e.val() ? (i = e.val(), $(this).parents(".livechatNameBox").hide()) : sweetAlert("Error", "Please enter a nickname.", "error")
    }), $(".livechatName").on("keypress", function() {
        console.log("Handler for .keypress() called.")
    }), $(".contact-btn").click(function() {
        "" != $("#nameInput").val() ? "" != $("#emailInput").val() ? "" != $("#messageInput").val() ? (sweetAlert("Message Sent!", "Thank you for your feedback.", "success"), $("#nameInput, #emailInput, #messageInput").val("")) : sweetAlert("Error", "Please enter your message.", "error") : sweetAlert("Error", "Please enter your email address.", "error") : sweetAlert("Error", "Please enter your nickname.", "error")
    })
}), $(window).load(function() {
    $("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
        overflow: "visible"
    }), $(".generator-form .cc-username-wrap").animateCSS("bounceInUp", {
        delay: 100
    }), $(".generator-form .cc-mode-wrap").animateCSS("bounceInUp", {
        delay: 100
    }), $(".generator-form .cc-region-wrap").animateCSS("bounceInUp", {
        delay: 100
    }), $(".generator-form .cc-coins-wrap").animateCSS("bounceInUp", {
        delay: 300
    }), $(".generator-form .cc-mass-boost-wrap").animateCSS("bounceInUp", {
        delay: 300
    }), $(".generator-form .cc-xp-boost-wrap").animateCSS("bounceInUp", {
        delay: 500
    }), $(".generator-form .cc-inv-wrap").animateCSS("bounceInUp", {
        delay: 500
    }), $(".generator-form .cc-btn-wrap").animateCSS("bounceInUp", {
        delay: 700
    })
});