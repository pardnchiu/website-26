(function (_window, _document, _empty, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _a, _b, _c, _d, _e, _f, _g, _h, _i, _j) {

    _document.addEventListener("DOMContentLoaded", function () {
        _SVGListener()

        const nav = [_n, _a, _v].$str(_empty);
        const section = [_s, _e, _c, _t, _i, _o, _n].$str(_empty);
        const strong = [_s, _t, _r, _o, _n, _g].$str(_empty);
        const ul = [_u, _l].$str(_empty);
        const li = [_l, _i].$str(_empty);
        const header = [_h, _e, _a, _d, _e, _r].$str(_empty);
        const h1 = [_h, 1].$str(_empty);
        const h3 = [_h, 3].$str(_empty);
        const h4 = [_h, 4].$str(_empty);
        const h5 = [_h, 5].$str(_empty);
        const button = [_b, _u, _t, _t, _o, _n].$str(_empty);
        const span = [_s, _p, _a, _n].$str(_empty);
        const img = [_i, _m, _g].$str(_empty);
        const div = [_d, _i, _v].$str(_empty);
        const footer = [_f, _o, _o, _t, _e, _r].$str(_empty);
        const label = [_l, _a, _b, _e, _l].$str(_empty);
        const input = [_i, _n, _p, _u, _t].$str(_empty);
        const article = [_a, _r, _t, _i, _c, _l, _e].$str(_empty);
        const figure = [_f, _i, _g, _u, _r, _e].$str(_empty);
        const figcaption = [_f, _i, _g, _c, _a, _p, _t, _i, _o, _n].$str(_empty);
        const time = [_t, _i, _m, _e].$str(_empty);
        const textarea = [_t, _e, _x, _t, _a, _r, _e, _a].$str(_empty);
        const $heading = "Lorem ipsum";
        const $title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
        const $content = "Aenean tempor feugiat congue. Curabitur vel arcu tempus, semper mi ut, aliquam felis. In ut quam et velit imperdiet dapibus. Etiam nec purus lacus. Maecenas viverra ornare varius.";
        const $datetime = "2023-07-13";
        const $time = "July 13, 2023";
        const $user = "Pardn Ltd"
        let _NAV, _LEFT_TAB, _FOOTER;

        _NAV = function (index, subIndex) {
            return (nav + "#top-nav")._({ percent: 0 }, [
                section._([
                    section._([
                        button._([
                            "fa-solid fa-bars-staggered"._fa
                        ])._click(() => _LEFT_TAB(index, subIndex))
                    ]),
                    section._([
                        strong._("PARDN LTD")
                    ]),
                    section._([
                        button._([
                            "fa-solid fa-magnifying-glass"._fa
                        ])
                    ])
                ])
            ])
        };

        _LEFT_TAB = function (index, subIndex) {
            _document.body._child([
                (section + "#right-tab")._([
                    section._([
                        button._([
                            "fa-solid fa-xmark"._fa
                        ])._click(function () {
                            $("right-tab")._class("hide");
                            var timer = setTimeout(() => {
                                clearTimeout(timer);
                                $("right-tab").$rm();
                            }, 300);
                        }),
                        ul._({ index: index, "sub-index": subIndex }, [
                            li._([
                                "Home",
                                "fa-solid fa-angle-down"._fa,
                                ul._({ row: 5 }, [
                                    li._([
                                        _a._("Magazine")._open("https://pardnchiu.github.io/web-template/target/20230719")
                                    ]),
                                    li._([
                                        _a._("Personal")._open("https://pardnchiu.github.io/web-template/target/20230720")
                                    ]),
                                    li._([
                                        _a._("Personal Alt")._open("https://pardnchiu.github.io/web-template/target/20230721")
                                    ]),
                                    li._([
                                        _a._("Classic")._open("https://pardnchiu.github.io/web-template/target/20230722")
                                    ]),
                                    li._("Minimal")._click(setHome),
                                ])
                            ])._click(function () {
                                this.$child(-1).$$class("show") ? this.$child(-1).class_("show") : this.$child(-1)._class("show")
                            }),
                            li._([
                                "List"
                            ])._click(setList),
                            li._([
                                "Post",
                                "fa-solid fa-angle-down"._fa,
                                ul._({ row: 2 }, [
                                    li._("Post 1")._click(() => setPost(1)),
                                    li._("Post 2")._click(() => setPost(2)),
                                ])
                            ])._click(function () {
                                this.$child(-1).$$class("show") ? this.$child(-1).class_("show") : this.$child(-1)._class("show")
                            }),
                            li._("contact")._click(setContact),
                            li._("404")._click(set404)
                        ]),
                        (ul + ".contact.dark.large")._([
                            li._([
                                _a._([
                                    "fa-brands fa-facebook"._fa
                                ])._open("https://www.facebook.com/chiuchingwei")
                            ]),
                            li._([
                                _a._([
                                    "fa-brands fa-instagram"._fa
                                ])._open("https://instagram.com/pardnio")
                            ]),
                            li._([
                                _a._([
                                    "fa-brands fa-github"._fa
                                ])._open("https://github.com/pardnchiu")
                            ]),
                            li._([
                                _a._([
                                    "fa-brands fa-linkedin-in"._fa
                                ])._open("https://linkedin.com/in/pardnchiu")
                            ]),
                            li._([
                                _a._([
                                    "fa-regular fa-envelope"._fa
                                ])._open("mailto:mail@pardn.ltd")
                            ])
                        ])
                    ])
                ])
            ]);
        };

        _FOOTER = (footer + "#bottom-footer")._([
            _a._({ instagram: "pardnio" },
                Array.from({ length: 6 }, () => 1)._$((e, i) =>
                    figure._([
                        img._("https://picsum.photos/256?random=" + i)
                    ])
                )
            )._open("https://instagram.com/pardnchiu"),
            section._([
                _p._("© Copyright 2023 帕登國際有限公司"),
                (ul + ".contact.dark.large")._([
                    li._([
                        _a._([
                            "fa-brands fa-facebook"._fa
                        ])._open("https://www.facebook.com/chiuchingwei")
                    ]),
                    li._([
                        _a._([
                            "fa-brands fa-instagram"._fa
                        ])._open("https://instagram.com/pardnio")
                    ]),
                    li._([
                        _a._([
                            "fa-brands fa-github"._fa
                        ])._open("https://github.com/pardnchiu")
                    ]),
                    li._([
                        _a._([
                            "fa-brands fa-linkedin-in"._fa
                        ])._open("https://linkedin.com/in/pardnchiu")
                    ]),
                    li._([
                        _a._([
                            "fa-regular fa-envelope"._fa
                        ])._open("mailto:mail@pardn.ltd")
                    ])
                ]),
                button._([
                    "fa-solid fa-angle-up"._fa,
                    "Back to Top"
                ])._click(function () {
                    _document.body.scrollTop = 0
                })
            ])
        ])

        function setHome() {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _NAV(0, 3),
                (section + "#body")._([
                    section._([
                        (section + ".list-min")._(
                            Array.from({ length: 4 }, () => 1)._$((e, i) =>
                                article._([
                                    section._([
                                        img._("https://pardn.io/image/head.jpg"),
                                        (ul + ".path")._([
                                            li._([
                                                _a._("Pardn Ltd")._open("mailto:mail@pardn.ltd")
                                            ]),
                                            li._([
                                                time._({ datetime: "2023-07-13" }, "July 13, 2023")
                                            ]),
                                            li._("Website"),
                                            li._([
                                                "fa-regular fa-message"._fa,
                                                "(0)"
                                            ])
                                        ])

                                    ]),
                                    (h5 + ".line.r2")._($title)._click(function () {
                                    }),
                                    figure._([
                                        img._("https://picsum.photos/640?random=" + i)
                                    ])._click(function () {
                                    }),
                                    (_p + ".line.r3")._($content),
                                    section._([
                                        (ul + ".share")._([
                                            li._([
                                                "fa-brands fa-facebook"._fa
                                            ]),
                                            li._([
                                                "fa-brands fa-twitter"._fa
                                            ]),
                                            li._([
                                                "fa-brands fa-linkedin-in"._fa
                                            ]),
                                            li._([
                                                "fa-brands fa-telegram"._fa
                                            ]),
                                            li._([
                                                "fa-regular fa-envelope"._fa
                                            ])
                                        ])
                                    ])
                                ])
                            )._([
                                ul._({ page: 1 }, [
                                    li._([
                                        "fa-solid fa-angle-left"._fa
                                    ]),
                                    li._({ txt: 1 }, 1),
                                    li._({ txt: 2 }, 2),
                                    li._({ txt: 3 }, 3),
                                    li._([
                                        "fa-solid fa-angle-right"._fa
                                    ])
                                ])
                            ])
                        )
                    ]),
                ]),
                _FOOTER
            ]);
        };

        function setList() {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _NAV(1, 0),
                (section + "#body")._([
                    (header + "#default-header")._([
                        section._([
                            h1._($heading),
                            (ul + ".path.slash")._([
                                li._($user),
                                li._("List"),
                                li._("List")
                            ])
                        ])
                    ]),
                    section._([
                        (section + ".list-min")._(
                            Array.from({ length: 4 }, () => 1)._$((e, i) =>
                                article._([
                                    section._([
                                        img._("https://pardn.io/image/head.jpg"),
                                        (ul + ".path")._([
                                            li._([
                                                _a._($user)._open("mailto:mail@pardn.ltd")
                                            ]),
                                            li._("Website"),
                                            li._([
                                                time._({ datetime: $datetime }, $time)
                                            ]),
                                            li._([
                                                "fa-regular fa-message"._fa,
                                                "(0)"
                                            ])
                                        ])
                                    ]),
                                    (h5 + ".line.r2")._($title)._click(function () {
                                    }),
                                    figure._([
                                        img._("https://picsum.photos/640?random=" + i)
                                    ])._click(function () {
                                    }),
                                    _p._($content),
                                    section._([
                                        (ul + ".share")._([
                                            li._([
                                                "fa-brands fa-facebook"._fa
                                            ]),
                                            li._([
                                                "fa-brands fa-twitter"._fa
                                            ]),
                                            li._([
                                                "fa-brands fa-linkedin-in"._fa
                                            ]),
                                            li._([
                                                "fa-brands fa-telegram"._fa
                                            ]),
                                            li._([
                                                "fa-regular fa-envelope"._fa
                                            ])
                                        ]),
                                        button._([
                                            "Continue reading",
                                            "fa-solid fa-angle-right"._fa
                                        ])
                                    ])
                                ])
                            )._([
                                ul._({ page: 1 }, [
                                    li._([
                                        "fa-solid fa-angle-left"._fa
                                    ]),
                                    li._({ txt: 1 }, 1),
                                    li._({ txt: 2 }, 2),
                                    li._({ txt: 3 }, 3),
                                    li._([
                                        "fa-solid fa-angle-right"._fa
                                    ])
                                ])
                            ])
                        )
                    ]),
                ]),
                _FOOTER
            ]);
        };

        function setPost(num) {
            var isPost1 = num === 1;
            _document.body.scrollTop = 0;
            _document.body.__child([
                _NAV(2, isPost1 ? 0 : 1),
                (section + "#body")._([
                    isPost1 ? (header + "#post-1-header")._([
                        section._([
                            (ul + ".path.slash")._([
                                li._($user),
                                li._("Post"),
                                li._("Post-1")
                            ])
                        ])
                    ]) : (header + "#post-2-header")._([
                        figure._([
                            img._("https://picsum.photos/640?random=" + Date.now())
                        ]),
                        section._([
                            (ul + ".path.light.slash")._([
                                li._($user),
                                li._("Post"),
                                li._("Post-2")
                            ]),
                            h1._($title),
                            section._([
                                img._("https://pardn.io/image/head.jpg"),
                                (ul + ".path.light")._([
                                    li._([
                                        _a._($user)._open("mailto:mail@pardn.ltd")
                                    ]),
                                    li._("Website"),
                                    li._([
                                        time._({ datetime: $datetime }, $time)
                                    ]),
                                    li._([
                                        _a._([
                                            "fa-regular fa-message"._fa,
                                            "(0)"
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ]),
                    section._([
                        (section + ".list-post")._([
                            isPost1 ? (section + ".about")._([
                                h1._($title),
                                section._([
                                    img._("https://pardn.io/image/head.jpg"),
                                    (ul + ".path")._([
                                        li._([
                                            _a._($user)._open("mailto:mail@pardn.ltd")
                                        ]),
                                        li._("Website"),
                                        li._([
                                            time._({ datetime: $datetime }, $time)
                                        ]),
                                        li._([
                                            _a._([
                                                "fa-regular fa-message"._fa,
                                                "(0)"
                                            ])
                                        ])
                                    ])
                                ])
                            ]) : null,
                            (section + ".body")._([
                                isPost1 ? (figure + ".x1")._([
                                    img._("https://picsum.photos/640?random=" + Date.now())
                                ]) : null,
                                _p._(`Curabitur efficitur lectus suscipit dignissim hendrerit. Pellentesque quis consequat metus. Donec vel ante et dolor mollis commodo. Phasellus lectus sapien, accumsan ut diam eget, sagittis feugiat ipsum. Cras tristique commodo tellus scelerisque congue. <a href="">Suspendisse potenti</a>. Fusce eu nisl in felis tincidunt placerat. Nullam eu interdum ligula. Morbi sapien magna, iaculis eget velit et, iaculis suscipit ligula. Maecenas laoreet eleifend justo, nec interdum augue convallis id.`),
                                _p._(`Duis ornare, eros a sollicitudin pulvinar, magna purus suscipit quam, id condimentum tellus arcu sit amet nisl. Fusce rhoncus nisi eu lacinia placerat. Sed aliquam orci a eros viverra, ac egestas lectus pellentesque. Morbi sed fermentum mi, <mark>molestie fringilla erat</mark>. Sed ut tellus gravida, fermentum ex ultricies, condimentum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat nulla sed sem auctor ullamcorper.`),
                                figure._([
                                    img._("https://picsum.photos/640?random=" + Date.now()),
                                    figcaption._($title)
                                ]),
                                _p._("Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi dictum massa ex, ac feugiat augue gravida vel. Nullam ullamcorper iaculis mauris nec dictum. Nam ac eros metus. Sed quam ligula, mattis et neque at, varius malesuada sapien."),
                                (figure + ".x2")._([
                                    img._("https://pardn.io/image/head0.jpg")
                                ]),
                                _p._("Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin enim luctus sem dapibus ullamcorper. Etiam vitae dui id nunc congue tincidunt. Fusce facilisis a est ut fermentum. Quisque pharetra risus blandit ex ullamcorper imperdiet. Nullam porttitor arcu nulla, vel pulvinar lorem hendrerit id. Donec in magna in nisl bibendum accumsan ornare eu diam. Morbi eu mi consequat, accumsan mauris in, semper neque."),
                                _p._("Proin viverra purus lectus, vitae congue nunc sagittis vitae. Integer maximus neque non turpis dictum, quis pellentesque augue feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut tortor id odio mattis interdum."),
                                _p._("Ut vitae mauris vel justo aliquam ornare a vitae lectus. Nulla finibus est ligula, in rutrum diam volutpat fermentum. Aenean tincidunt in orci non sodales. Quisque et venenatis eros, in hendrerit diam. Maecenas molestie urna eu neque mattis, a ornare tellus ultricies. Duis elementum eleifend magna id commodo. Nulla molestie tincidunt massa, eget porta libero tincidunt sit amet. Maecenas feugiat lorem ut vehicula rutrum. Aliquam interdum sagittis lorem, non suscipit ipsum."),
                                h3._("Cras convallis, turpis sed ultricies accumsan"),
                                _p._("Magna sapien pulvinar ligula, at consequat orci risus ut libero. Praesent volutpat turpis est, eget aliquet ex tristique scelerisque. Nulla ut mi non ipsum suscipit efficitur. Mauris porta, lacus a scelerisque viverra"),
                                _p._("Lectus odio luctus sem, in maximus eros nunc ut arcu. Morbi eu neque accumsan, vestibulum lacus a, imperdiet sapien. Pellentesque a tortor at nisl eleifend faucibus. Duis tortor nisl, consectetur eu mi a, porta dictum ipsum. Aliquam a dignissim diam. Vestibulum id cursus nisi."),
                                _p._("Donec pulvinar libero vel mi maximus placerat. Duis condimentum est purus, in feugiat felis iaculis nec. Maecenas neque lorem, facilisis id semper eu, efficitur ut orci. Integer scelerisque mattis tellus sed sagittis. Cras vel eros sed nibh dignissim tincidunt et eget felis. Praesent et vestibulum nibh."),
                                (figure + ".x2")._([
                                    img._("https://pardn.io/image/head1.jpg")
                                ]),
                                (figure + ".x2")._([
                                    img._("https://pardn.io/image/head2.jpg")
                                ]),
                                h3._("Pellentesque eget nulla sem"),
                                ul._([
                                    li._("Pellentesque viverra metus magna"),
                                    li._("Vitae laoreet urna dictum sed"),
                                    li._("Praesent vel tincidunt velit"),
                                    li._("Nam purus felis, dapibus eu ante ut"),
                                    li._("Fusce volutpat lobortis sem quis")
                                ]),
                                _p._(`Phasellus eu interdum sem. Mauris tortor ex, venenatis in iaculis sit amet, tristique at metus. <a href="">Aliquam fringilla</a> lorem et quam pretium, eget interdum ipsum pharetra. Nam fringilla hendrerit scelerisque. Maecenas viverra enim id nunc aliquam, sit amet ultrices nisi auctor. In ut arcu congue, euismod tellus vitae, efficitur nulla. Suspendisse potenti.`)
                            ]),
                            (section + ".bottom")._([
                                section._([
                                    _p._("Share this:"),
                                    (ul + ".share.dark")._([
                                        li._([
                                            "fa-brands fa-facebook"._fa
                                        ]),
                                        li._([
                                            "fa-brands fa-twitter"._fa
                                        ]),
                                        li._([
                                            "fa-brands fa-linkedin-in"._fa
                                        ]),
                                        li._([
                                            "fa-brands fa-telegram"._fa
                                        ]),
                                        li._([
                                            "fa-regular fa-envelope"._fa
                                        ])
                                    ])
                                ]),
                                section._([
                                    (ul + ".tag")._([
                                        li._("website"),
                                        li._("html"),
                                        li._("css"),
                                        li._("javascript")
                                    ])
                                ])
                            ]),
                            (section + ".user")._([
                                img._("https://pardn.io/image/head.jpg"),
                                section._([
                                    h4._($user),
                                    _p._("我是 邱敬幃 (Pardn Chiu)。一位具備iOS和網站全端開發技能的開發者，目前在 帕登國際有限公司 (Pardn Ltd) 擔任全端工程師。"),
                                    (ul + ".contact.dark")._([
                                        li._([
                                            _a._([
                                                "fa-brands fa-facebook"._fa
                                            ])._open("https://www.facebook.com/chiuchingwei")
                                        ]),
                                        li._([
                                            _a._([
                                                "fa-brands fa-instagram"._fa
                                            ])._open("https://instagram.com/pardnio")
                                        ]),
                                        li._([
                                            _a._([
                                                "fa-brands fa-github"._fa
                                            ])._open("https://github.com/pardnchiu")
                                        ]),
                                        li._([
                                            _a._([
                                                "fa-brands fa-linkedin-in"._fa
                                            ])._open("https://linkedin.com/in/pardnchiu")
                                        ]),
                                        li._([
                                            _a._([
                                                "fa-regular fa-envelope"._fa
                                            ])._open("mailto:mail@pardn.ltd")
                                        ])
                                    ]),
                                ])
                            ]),
                            (section + ".post")._([
                                _a._([
                                    _p._("Previous"),
                                    h5._($title)
                                ]),
                                _a._([
                                    _p._("Next"),
                                    h5._($title)
                                ])
                            ])
                        ]),
                        section._([
                            h3._("Comments (1)"),
                            (span + ".svg")._({ src: "image/wave.svg" }),
                            (section + ".comment")._([
                                div._([
                                    img._("https://pardn.io/image/head0.jpg"),
                                    section._([
                                        _p._($content),
                                        strong._([
                                            "John",
                                            time._({ datetime: $datetime }, $time)
                                        ]),
                                        button._("REPLY"),
                                        section._([
                                            div._([
                                                _p._($content),
                                                time._({ datetime: $datetime }, $time)
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                        section._([
                            h3._("Leave a Reply"),
                            (span + ".svg")._({ src: "image/wave.svg" }),
                            (section + ".form")._([
                                _i._("Your email address will not be published. Required fields are marked *"),
                                label._([
                                    "Comment",
                                    textarea._()
                                ]),
                                label._([
                                    "Name",
                                    input._()
                                ]),
                                label._([
                                    "Email",
                                    input._()
                                ]),
                                button._("Send comment")
                            ])
                        ])
                    ])
                ]),
                _FOOTER
            ]);
        };

        function setContact() {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _NAV(4, 0),
                (section + "#body")._([
                    (header + "#default-header")._([
                        section._([
                            h1._($heading),
                            (ul + ".path.slash")._([
                                li._($user),
                                li._("Contact")
                            ])
                        ])
                    ]),
                    section._([
                        (section + ".full")._([
                            section._([
                                ul._([
                                    li._([
                                        "fa-brands fa-github"._fa,
                                        section._([
                                            _b._("GitHub"),
                                            _p._([
                                                _a._("github.com/pardnchiu")._open("https://github.com/pardnchiu")
                                            ])
                                        ])
                                    ]),
                                    li._([
                                        "fa-regular fa-envelope"._fa,
                                        section._([
                                            _b._("Email"),
                                            _p._([
                                                _a._("mail@pardn.ltd")._open("mailto:mail@pardn.ltd")
                                            ])
                                        ])
                                    ]),
                                    li._([
                                        "fa-solid fa-location-dot"._fa,
                                        section._([
                                            _b._("Location"),
                                            _p._([
                                                _a._("新北市新店區中央路153號")._open("https://goo.gl/maps/UNdSGK5dEwD3h3SH6")
                                            ])
                                        ])
                                    ])
                                ])
                            ]),
                            (section + ".x2")._([
                                h3._("Send Message"),
                                (span + ".svg")._({ src: "image/wave.svg" }),
                                section._([
                                    label._([
                                        "Message",
                                        textarea._()
                                    ]),
                                    label._([
                                        "Name",
                                        input._()
                                    ]),
                                    label._([
                                        "Email",
                                        input._()
                                    ]),
                                    button._("Send Message")
                                ])
                            ]),
                            (section + ".x2")._([
                                `<iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.798970660517!2d121.52741537599951!3d24.972953377855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34680218de051f7b%3A0x1a200126a5466fc4!2zMjMx5paw5YyX5biC5paw5bqX5Y2A5Lit5aSu6LevMTUz6Jmf!5e0!3m2!1szh-TW!2stw!4v1689662481236!5m2!1szh-TW!2stw"
                                    style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>`
                            ])
                        ])
                    ]),
                ]),
                _FOOTER
            ]);
        };

        function set404() {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _NAV(5, 0),
                (section + "#body")._([
                    section._([
                        (section + ".error")._([
                            h1._("404 Not Found"),
                            _p._("Oops, the page you are looking for does not exist."),
                            button._([
                                "fa-solid fa-house"._fa,
                                "Return Home"
                            ])._click(setHome)
                        ])
                    ]),
                ]),
                _FOOTER
            ]);
        };

        setHome();

        var timer = setTimeout(function () {
            clearTimeout(timer);

            _document.body.class_("ft");
        }, 500);
    });
}(window, document, "", _0_, _1_, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, __0, __1, __2, __3, __4, __5, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9));