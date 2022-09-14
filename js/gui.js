export class GUI {

    static toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    static addYear(year, divId) {
        $(`#${divId}`).append(
            `<b style="font-size: 15px; margin-bottom: 1px; border-bottom: 1px #3b9b6d solid">${year}</b>`);
    }
    static addPublication({ href, html, tag} = {}) {
        if (tag === 'under review') {
            tag = '<span class="tag orange"> <span class="fa fa-hourglass"> </span> under review</span>'
        } else if (tag === 'accepted' || tag === 'in press') {
            tag = '<span class="tag green"> <span class="fa fa-check"> </span> in press</span>'
        } else {
            tag = '<span class="tag blue"> <span class="fa fa-check"> </span> published</span>'
        }

        $("#publications").append(
            `<div class="post" onclick="window.open('${href}', '_blank').focus()"> ${tag}${html}</div>`)
    }

    static hideItems() {
        $('#publications').hide();
        $('#teachings').hide();
        $('#poster').hide();
                // $('#about-section').hide();
    }

    static showItems() {
        // $('#about-section').show(700);
        // $('#pgg').show(500)
        // $('#pgg').show(1200);
        // $('#duopoly').hide(900)

        $('#publications').show(900);
        $('#teachings').show(1200);
        $('#poster').show(1500);
    }

    static setModal(name) {

        // Get the modal
        const modal = document.getElementById(`${name}Modal`);


        // Get the image and insert it inside the modal - use its "alt" text as a caption
        const img = document.getElementById(`${name}`);
        const modalImg = document.getElementById(`${name}Img`);
        const captionText = document.getElementById(`${name}Caption`);
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = img.src;//this.style.backgroundImage
                //.replace('url(', '').replace(')', '').replace('"', '').replace('"', '');
            // captionText.innerHTML = this.alt;
            // debugger;
        }

        // Get the <span> element that closes the modal
        const span = document.getElementById(`${name}Close`);
        span.onclick = function () {
            modal.style.display = "none";
        }

    }

    static async getPage(file) {
        $('#main').html(
            '<div class="spinner"><div></div><div></div><div></div></div>');
        let text = fetch(file)
            .then(response => response.text())
            .then(text => text);
        await delay(300);
        return text;
    }

}

const delay = ms => new Promise(res => setTimeout(res, ms));