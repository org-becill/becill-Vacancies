! function() {
    "use strict";
    let e = (e, t = !1) => (e = e.trim(), t) ? [...document.querySelectorAll(e)] : document.querySelector(e),
        t = (t, s, a, l = !1) => {
            let i = e(s, l);
            i && (l ? i.forEach(e => e.addEventListener(t, a)) : i.addEventListener(t, a))
        },
        s = (e, t) => {
            e.addEventListener("scroll", t)
        },
        a = e("#navbar .scrollto", !0),
        l = () => {
            let t = window.scrollY + 200;
            a.forEach(s => {
                if (!s.hash) return;
                let a = e(s.hash);
                a && (t >= a.offsetTop && t <= a.offsetTop + a.offsetHeight ? s.classList.add("active") : s.classList.remove("active"))
            })
        };
    window.addEventListener("load", l), s(document, l);
    let i = t => {
            let s = e("#header").offsetHeight,
                a = e(t).offsetTop;
            window.scrollTo({
                top: a - s,
                behavior: "smooth"
            })
        },
        o = e("#navbar"),
        r = e("#header"),
        n = e("#topbar");
    if (r) {
        let c = () => {
            window.scrollY > 100 ? (r.classList.add("header-scrolled"), n && n.classList.add("topbar-scrolled"), o && o.classList.add("navbar-mobile-bg")) : (r.classList.remove("header-scrolled"), n && n.classList.remove("topbar-scrolled"), o && o.classList.remove("navbar-mobile-bg"))
        };
        window.addEventListener("load", c), s(document, c)
    }
    let d = e("#hero-carousel-indicators");
    e("#heroCarousel .carousel-item", !0).forEach((e, t) => {
        0 === t ? d.innerHTML += "<button type='button' data-bs-target='#heroCarousel' data-bs-slide-to='" + t + "' class='active' aria-current='true' aria-label='Slide " + (t + 1) + "'></button>" : d.innerHTML += "<button type='button' data-bs-target='#heroCarousel' data-bs-slide-to='" + t + "'  aria-label='Slide " + (t + 1) + "'></button>"
    });
    let h = e(".back-to-top");
    if (h) {
        let p = () => {
            window.scrollY > 100 ? h.classList.add("active") : h.classList.remove("active")
        };
        window.addEventListener("load", p), s(document, p)
    }
    t("click", ".mobile-nav-toggle", function(t) {
        e("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x")
    }), t("click", ".navbar .dropdown > a", function(t) {
        e("#navbar").classList.contains("navbar-mobile") && (t.preventDefault(), this.nextElementSibling.classList.toggle("dropdown-active"))
    }, !0), t("click", ".scrollto", function(t) {
        if (e(this.hash)) {
            t.preventDefault();
            let s = e("#navbar");
            if (s.classList.contains("navbar-mobile")) {
                s.classList.remove("navbar-mobile");
                let a = e(".mobile-nav-toggle");
                a.classList.toggle("bi-list"), a.classList.toggle("bi-x")
            }
            i(this.hash)
        }
    }, !0), window.addEventListener("load", () => {
        window.location.hash && e(window.location.hash) && i(window.location.hash)
    });
    let b = e("#preloader");
    b && window.addEventListener("load", () => {
        b.remove()
    }), GLightbox({
        selector: ".glightbox"
    }), GLightbox({
        selector: ".galelry-lightbox"
    }), new Swiper(".testimonials-slider", {
        speed: 600,
        loop: !0,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    }), new Swiper(".partners-slider", {
        speed: 600,
        loop: !0,
        autoplay: {
			delay: 1000,
			pauseOnMouseEnter: true,
			disableOnInteraction: false
		  },
		  on: {
			navigationNext: swiper => swiper.autoplay.stop(),
			navigationPrev: swiper => swiper.autoplay.stop()
		  },
        slidesPerView: "auto",
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            800: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            1e3: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 0
            }
        }
    });
    var v = !1;
    v = "rtl" == page_dir, $("#owl-slider").owlCarousel({
        items: 3,
        autoplay: !0,
        rtl: v,
        autoplayTimeout: 3e3,
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
        return new bootstrap.Tooltip(e)
    }), t("click", ".categories-widget .categories-title", function(e) {
        var $title = $(this);
        var $widget = $title.closest('.categories-widget');
        var $btn = $widget.find('.categories-title button').first();
        var $list = $widget.find('.categories-list').first();
        if (!$btn.length || !$list.length) return;
        var expanded = $btn.attr('aria-expanded') === 'true';
         $btn.attr('aria-expanded', (!expanded).toString());
         $list.stop(true, true).slideToggle(200, function () {
      var isHidden = $list.is(':hidden');
      $list.attr('aria-hidden', isHidden ? 'true' : 'false');
    });
    }), $("#accordion_search_word").keyup(function() {
        var e = $(this).val(),
            t = 0;
        $("#accordion_search_results .accordion-item").each(function() {
            0 > $(this).text().search(RegExp(e, "i")) ? $(this).parent().parent().parent().hide() : ($(this).parent().parent().parent().show(), t++)
        })
    })
}();