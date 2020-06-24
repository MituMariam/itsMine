//*======== Switch Theme Action =====*//




//*======== Custom Scroll Function =====*//


$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    docHeight = $(document).height();
    winHeight = $(window).height();
    scrollPercent = (scroll / (docHeight - winHeight)) * 100;
    $('.progressbar').css('height', scrollPercent + '%')
    // console.log(docHeight);
});


//*======== Project Filter functions =====*//


(function () {
    const filterBtn = document.querySelectorAll('.filter_btn');


//---Active color btn 
    for (let i = 0; i < filterBtn.length; i++) {
        filterBtn[i].addEventListener("click", function () {
            const current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }



    
//--- filter  Btn value with same items
    filterBtn.forEach(btn => {
        btn.addEventListener('click', () => {

            const value = event.target.dataset.filter;
            console.log(value);


            const projectItem = document.querySelectorAll('.project_item');

            projectItem.forEach(item => {
                if (value === "all") {
                    item.style.display = "block";

                } else {
                    if (item.classList.contains(value)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }

                }

            })

        })
    })



})();


(function () {
    const toggle = document.querySelector('.toggle');
    const inner = document.querySelector('.inner');
    const body = document.querySelector('body');

    toggle.addEventListener('click', function () {
        inner.classList.toggle('active');
        body.classList.toggle('dark');
        const sectionAll = document.querySelectorAll('section,.project_item,a');

        sectionAll.forEach(function (section) {
            section.classList.toggle('dark');
        })
    })

})();