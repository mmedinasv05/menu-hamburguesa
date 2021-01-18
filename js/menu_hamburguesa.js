export default function hamburguerMenu(panelBtn, panel, link){
    const d = document;

    d.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("menu-active");
            d.querySelector(panelBtn).classList.toggle('is-active');
        }

        if(e.target.matches(link)){
            d.querySelector(panel).classList.remove("menu-active");
            d.querySelector(panelBtn).classList.remove('is-active');
        }
    });
}