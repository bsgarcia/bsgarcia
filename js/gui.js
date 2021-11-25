export class GUI {

    static addYear(year, divId) {
        $(`#${divId}`).append(
            `<b style="font-size: 15px; margin-bottom: 1px; border-bottom: 1px #3b9b6d solid">${year}</b>`);
    }
    static addPublication({ href, html } = {}) {
        $("#publications").append(
            `<div class="post" onclick="window.open('${href}', '_blank').focus()">${html}</div>`)
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
        $('#pgg').show(1200);
        $('#duopoly').hide(900)

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
        return fetch(file)
        .then(response => response.text())
        .then(text => text);
    }

}