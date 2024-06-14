continue_playing = true;

$(document).ready(function () {
    // $("#chose-mode").on('change', function () {
    //     // $(this).trigger('submit')
    //     continue_playing = false;
    // });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function start() {
    function loop() {
        if (!continue_playing) return;

        let mode = $("#chose-mode input[type='radio']:checked").val();

        if (mode == "attaque") {
            attack().then(() => {
                setTimeout(loop, $('#speed').val());
            });
        } else if (mode == "esquive") {
            esquive().then(() => {
                setTimeout(loop, $('#speed').val());
            });
        }
    }

    loop();
}
start();

async function esquive() {
    img_index = getRandomInt(4)
    $("#model").attr("src", `models/esquive/${img_index}.svg`);
    return new Promise(resolve => setTimeout(resolve, 100));
}

async function attack() {
    img_index = getRandomInt(6)
    $("#model").attr("src", `models/attack/${img_index}.svg`);
    return new Promise(resolve => setTimeout(resolve, 100));
}

