(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[818], {
    8312: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return a(7211)
        }
        ])
    },
    7604: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return n
            }
        });
        var s = a(5893)
          , r = a(1365);
        function n(e) {
            let {title: t, url: a, label: n="", className: l="", fill: i, small: o} = e
              , c = t.trim().split(" ")
              , d = c.pop()
              , m = c.join(" ");
            return (0,
            s.jsxs)("a", {
                className: "inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 ".concat(l, " group/link ").concat(o ? "text-sm" : "text-base"),
                href: a,
                target: "_blank",
                rel: "noreferrer noopener",
                "aria-label": "".concat(n || t, " (opens in a new tab)"),
                children: [i && (0,
                s.jsx)("span", {
                    className: "absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                }), (0,
                s.jsxs)("span", {
                    children: [m, " ", (0,
                    s.jsxs)("span", {
                        className: "inline-block",
                        children: [d, (0,
                        s.jsx)(r.Z, {
                            use: "arrow-external",
                            className: "inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ".concat(o ? "ml-0.5" : "ml-1 translate-y-px")
                        })]
                    })]
                })]
            })
        }
    },
    1365: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return r
            }
        });
        var s = a(5893);
        function r(e) {
            let {use: t, className: a="h-4 w-4"} = e;
            switch (t) {
            case "github":
                return (0,
                s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("path", {
                        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    })
                });
            case "linkedin":
                return (0,
                s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("path", {
                        d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                    })
                });
            case "arrow-external":
                return (0,
                s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z",
                        clipRule: "evenodd"
                    })
                });
            case "arrow-internal":
                return (0,
                s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",
                        clipRule: "evenodd"
                    })
                });
            case "star":
                return (0,
                s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",
                        clipRule: "evenodd"
                    })
                });
            case "download":
                return (0,
                s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: [(0,
                    s.jsx)("path", {
                        d: "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
                    }), (0,
                    s.jsx)("path", {
                        d: "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
                    })]
                });
            case "close":
                return (0,
                s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                        clipRule: "evenodd"
                    })
                });
            case "link":
                return (0,
                s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: a,
                    "aria-hidden": "true",
                    children: [(0,
                    s.jsx)("path", {
                        d: "M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
                    }), (0,
                    s.jsx)("path", {
                        d: "M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
                    })]
                });
            default:
                return (0,
                s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    className: a,
                    fill: "none",
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 6h16M4 12h16M4 18h7"
                    })
                })
            }
        }
    },
    4533: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return r
            }
        });
        var s = a(5893);
        function r(e) {
            let {text: t, className: a=""} = e;
            return (0,
            s.jsx)("div", {
                className: "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ".concat(a),
                children: t
            })
        }
    },
    8425: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return i
            }
        });
        var s = a(5893)
          , r = a(7294)
          , n = a(9008)
          , l = a.n(n);
        function i(e) {
            let {title: t, pathname: a} = e
              , n = "Louis Dufour"
              , i = "Louis Dufour is a software engineer who builds accessible, inclusive products and digital experiences for the web."
              , o = "https://brittanychiang.com"
              , c = "".concat(o, "/og.png")
              , d = "@bchiang7"
              , m = n;
            return t !== n && (m = "".concat(t, " | ").concat(n)),
            (0,
            s.jsxs)(l(), {
                children: [(0,
                s.jsx)("title", {
                    children: m
                }), (0,
                s.jsx)("meta", {
                    name: "description",
                    content: i
                }, "description"), (0,
                s.jsx)("meta", {
                    name: "image",
                    content: c
                }), (0,
                s.jsx)("meta", {
                    property: "og:locale",
                    content: "en_US"
                }, "og:locale"), (0,
                s.jsx)("meta", {
                    property: "og:site_name",
                    content: n
                }, "og:site_name"), (0,
                s.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }, "og:type"), (0,
                s.jsx)("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }, "twitter:card"), (0,
                s.jsx)("meta", {
                    property: "twitter:creator",
                    content: d
                }, "twitter:creator"), (0,
                s.jsx)("meta", {
                    property: "twitter:site",
                    content: d
                }, "twitter:site"), ["og", "twitter"].map(e=>(0,
                s.jsxs)(r.Fragment, {
                    children: [(0,
                    s.jsx)("meta", {
                        property: "".concat(e, ":title"),
                        content: m
                    }, "".concat(e, ":title")), (0,
                    s.jsx)("meta", {
                        property: "".concat(e, ":description"),
                        content: i
                    }, "".concat(e, ":description")), (0,
                    s.jsx)("meta", {
                        property: "".concat(e, ":url"),
                        content: o + a
                    }, "".concat(e, ":url")), (0,
                    s.jsx)("meta", {
                        property: "".concat(e, ":image"),
                        content: c
                    }, "".concat(e, ":image"))]
                }, e)), (0,
                s.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "512x192",
                    href: "Ressources/images/Lfavicon.png"
                }), (0,
                s.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "192x192",
                    href: "Ressources/images/Lfavicon.png"
                }), (0,
                s.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "Ressources/images/Lfavicon.png"
                }), (0,
                s.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "Ressources/images/Lfaviconx50.png"
                }), (0,
                s.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "Ressources/images/Lfaviconx50.png"
                }), (0,
                s.jsx)("link", {
                    rel: "manifest",
                    href: "/favicon/site.webmanifest"
                }), (0,
                s.jsx)("meta", {
                    name: "msapplication-TileColor",
                    content: "#0f172a"
                }), (0,
                s.jsx)("meta", {
                    name: "theme-color",
                    content: "#0f172a"
                }), (0,
                s.jsx)("meta", {
                    name: "google-site-verification",
                    content: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
                })]
            })
        }
    },
    7211: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return k
            }
        });
        var s = a(5893)
          , r = a(7294);
        function n() {
            let e = "font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300";
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsxs)("p", {
                    className: "mb-4",
                    children: ["En 2024, j’ai obtenu mon Bachelor Universitaire de Technologie en informatique à l’IUT de Clermont-Ferrand, où j’ai développé un intérêt passionné pour le développement mobile. J'ai acquis des compétences en Swift, Android et React Native, et j’ai eu l'occasion de créer des applications mobiles pendant deux mois, explorant des solutions innovantes pour répondre aux besoins des utilisateurs.", " ", (0,
                    s.jsx),]
                }), (0,
                s.jsxs)("p", {
                    className: "mb-4",
                    children: ["Aujourd'hui, je souhaite me lancer en tant que développeur mobile, spécialisé dans la création d'applications innovantes et accessibles. J'ai une expérience en gestion de bases de données, développement front-end et back-end, ainsi qu'en gestion de projets agiles. Mon objectif est de combiner design et ingénierie pour créer des solutions esthétiques et robustes, tout en restant à jour avec les dernières avancées technologiques pour offrir des solutions techniques durables à mes clients.", " ", (0,
                    s.jsx), " "]
                }), (0,
                s.jsxs)]
            })
        }
        var l = a(7604);
        function i() {
            return (0,
            s.jsx)("div", {
                className: "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
            })
        }
        var o = a(1365)
          , c = a(4533);
        function d() {
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)("ol", {
                    className: "group/list",
                    children: [{
                        date: "Stage — 2024",
                        company: {
                            name: "Inrae",
                            link: "https://www.linkedin.com/company/test-science/"
                        },
                        positions: ["Stagiaire"],
                        desc: "Amélioration d'un logiciel Web pour le diagnostic et l'étude de la consommation alimentaire dans les territoires urbains.",
                        tech: ["Java", "Javascript", "Postgresql"],
                    },
                    {
                        date: "Stage — 2023",
                        company: {
                            name: "Qim info",
                            link: "https://www.linkedin.com/company/qim-info/"
                        },
                        positions: ["Stagiaire"],
                        desc: "Missions Conception de nouvelles fonctionnalités Développement de l’application incluant un mécanisme de notifications Réalisation ou adaptation des webservices utilisés Test des fonctionnalités développées Déploiement sur les stores Formation et/ou support aux utilisateurs·trices",
                        tech: ["Flutter", "CI-CD", "API", "C#"],
                    },
                    {
                        date: "2021 — 2024",
                        company: {
                            name: "Université Clermont Auvergne",
                            link: "https://www.linkedin.com/school/universite-clermont-auvergne/posts/?feedView=all"
                        },
                        positions: ["Étudiants"],
                        desc: "Le B.U.T. Informatique est un diplôme national en 3 ans formant des informaticiens qui participent à la conception, la réalisation et la mise en œuvre de solutions informatiques répondant aux besoins de transformation numérique des organisations.",
                    }].map((e,t)=>(0,
                    s.jsx)("li", {
                        className: "mb-12",
                        children: (0,
                        s.jsxs)("div", {
                            className: "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                            children: [(0,
                            s.jsx)(i, {}), (0,
                            s.jsx)("header", {
                                className: "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2",
                                "aria-label": e.date.replace("—", "to").replace("Dec", "December"),
                                children: e.date || ""
                            }), (0,
                            s.jsxs)("div", {
                                className: "z-10 sm:col-span-6",
                                children: [(0,
                                s.jsx)("h3", {
                                    className: "font-medium leading-snug text-slate-200",
                                    children: e.positions.map((t,a)=>(0,
                                    s.jsx)("div", {
                                        children: 0 === a ? (0,
                                        s.jsx)(l.Z, {
                                            title: "".concat(t, " \xb7 ").concat(e.company.name),
                                            label: "".concat(t, " at ").concat(e.company.name),
                                            url: e.company.link,
                                            fill: !0
                                        }) : (0,
                                        s.jsx)("div", {
                                            className: "text-slate-500",
                                            "aria-hidden": "true",
                                            children: t
                                        })
                                    }, a))
                                }), (0,
                                s.jsx)("p", {
                                    className: "mt-2 text-sm leading-normal",
                                    children: e.desc
                                }), e.links && (0,
                                s.jsx)("ul", {
                                    className: "mt-2 flex flex-wrap",
                                    "aria-label": "Related links",
                                    children: e.links.map((e,t)=>(0,
                                    s.jsx)("li", {
                                        className: "mr-4",
                                        children: (0,
                                        s.jsxs)("a", {
                                            className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                            href: e.url,
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            "aria-label": "".concat(e.title, " (opens in a new tab)"),
                                            children: [(0,
                                            s.jsx)(o.Z, {
                                                use: "link",
                                                className: "mr-1 h-3 w-3"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: e.title
                                            })]
                                        })
                                    }, t))
                                }), e.tech && (0,
                                s.jsx)("ul", {
                                    className: "mt-2 flex flex-wrap",
                                    "aria-label": "Technologies used",
                                    children: e.tech.map((e,t)=>(0,
                                    s.jsx)("li", {
                                        className: "mr-1.5 mt-2",
                                        children: (0,
                                        s.jsx)(c.Z, {
                                            text: e
                                        })
                                    }, t))
                                })]
                            })]
                        })
                    }, t))
                }), (0,
                s.jsx)("div", {
                    className: "mt-12",
                    children: (0,
                    s.jsx)(l.Z, {
                        title: "Voir le CV complet",
                        url: "Cv-LouisDufour.pdf",
                        className: "font-semibold text-slate-200"
                    })
                })]
            })
        }
        function m() {
            let e = "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300";
            return (0,
            s.jsx)("footer", {
                className: "max-w-md pb-16 text-sm text-slate-500 sm:pb-0",
                children: (0,
                s.jsxs)("p", {
                    children: ["Conçu de manière libre dans", " ", (0,
                    s.jsx)("a", {
                        href: "https://www.figma.com/",
                        className: e,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        "aria-label": "Figma (opens in a new tab)",
                        children: "Figma"
                    }), " ", "et basé sur le template de", " ", (0,
                    s.jsx)("a", {
                        href: "https://v4.brittanychiang.com/",
                        className: e,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        "aria-label": "Brittany Chiang (opens in a new tab)",
                        children: "Brittany Chiang"
                    }), ". Réalisé avec", " ", (0,
                    s.jsx)("a", {
                        href: "https://nextjs.org/",
                        className: e,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        "aria-label": "Next.js (opens in a new tab)",
                        children: "Next.js"
                    }), " ", "et", " ", (0,
                    s.jsx)("a", {
                        href: "https://tailwindcss.com/",
                        className: e,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        "aria-label": "Tailwind CSS (opens in a new tab)",
                        children: "Tailwind CSS"
                    }), ", et déployé avec", " ", (0,
                    s.jsx)("a", {
                        href: "https://pages.github.com/",
                        className: e,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        "aria-label": "CodeFrist (opens in a new tab)",
                        children: "CodeFrist"
                    }), ". Tout le texte est composé avec la police", " ", (0,
                    s.jsx)("a", {
                        href: "https://rsms.me/inter/",
                        className: e,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        "aria-label": "Inter (opens in a new tab)",
                        children: "Inter"
                    }), "."]
                })
            })
        }
        var p = a(1664)
          , h = a.n(p);
        function u(e) {
            let {sections: t} = e;
            return (0,
            s.jsxs)("header", {
                className: "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24",
                children: [(0,
                s.jsxs)("div", {
                    children: [(0,
                    s.jsx)("h1", {
                        className: "text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl",
                        children: (0,
                        s.jsx)(h(), {
                            href: "/",
                            children: "Louis Dufour"
                        })
                    }), (0,
                    s.jsx)("h2", {
                        className: "mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl",
                        children: "Développeur Full Stack Junior"
                    }), (0,
                    s.jsx)("p", {
                        className: "mt-4 max-w-xs leading-normal",
                        children: "Concevoir des expériences mobiles fluides avec innovation et précision."
                    }), (0,
                    s.jsx)("nav", {
                        className: "nav hidden lg:block",
                        "aria-label": "In-page jump links",
                        children: (0,
                        s.jsx)("ul", {
                            className: "mt-16 w-max",
                            children: t.map((e,t)=>e.hideFromNav ? null : (0,
                            s.jsx)("li", {
                                children: (0,
                                s.jsxs)("a", {
                                    className: "group flex items-center py-3 ".concat(0 === t ? "active" : ""),
                                    href: "#".concat(e.heading.toLowerCase()),
                                    children: [(0,
                                    s.jsx)("span", {
                                        className: "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                                    }), (0,
                                    s.jsx)("span", {
                                        className: "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                                        children: e.heading
                                    })]
                                })
                            }, t))
                        })
                    })]
                }), (0,
                s.jsx)("ul", {
                    className: "ml-1 mt-8 flex items-center",
                    "aria-label": "Social media",
                    children: [{
                        title: "GitHub",
                        url: "https://github.com/LouisDuf",
                        icon: "github"
                    }, {
                        title: "LinkedIn",
                        url: "https://www.linkedin.com/in/Louis-dufour-903702252/",
                        icon: "linkedin"
                    }].map((e,t)=>(0,
                    s.jsx)("li", {
                        className: "mr-5 text-xs shrink-0",
                        children: (0,
                        s.jsxs)("a", {
                            className: "block hover:text-slate-200",
                            href: e.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            "aria-label": "".concat(e.title, " (opens in a new tab)"),
                            title: e.title,
                            children: [(0,
                            s.jsx)("span", {
                                className: "sr-only",
                                children: e.title
                            }), (0,
                            s.jsx)(o.Z, {
                                use: e.icon,
                                className: "twitter-x" === e.icon ? "h-5 w-5" : "h-6 w-6"
                            })]
                        })
                    }, t))
                })]
            })
        }
        var g = a(5675)
          , x = a.n(g);
        function f(e) {
            let {title: t, url: a, className: r, border: n=!0} = e
              , l = t.trim().split(" ")
              , i = l.pop()
              , c = l.join(" ")
              , d = n ? "border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none" : "";
            return (0,
            s.jsx)(h(), {
                className: "inline-flex items-center font-medium leading-tight text-slate-200 ".concat(r, " group"),
                href: a,
                "aria-label": t,
                children: (0,
                s.jsxs)("span", {
                    children: [(0,
                    s.jsxs)("span", {
                        className: d,
                        children: [c, " "]
                    }), (0,
                    s.jsxs)("span", {
                        className: "whitespace-nowrap",
                        children: [(0,
                        s.jsx)("span", {
                            className: d,
                            children: i
                        }), (0,
                        s.jsx)(o.Z, {
                            use: "arrow-internal",
                            className: "ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                        })]
                    })]
                })
            })
        }
        function b() {
            let e = e=>{
                let {repoUrl: t} = e
                  , [a,n] = (0,
                r.useState)(null);
                return ((0,
                r.useEffect)(()=>{
                    let e = t.split("/")[4];
                    fetch("https://api.github.com/repos/bchiang7/".concat(e)).then(e=>e.json()).then(e=>{
                        let {stargazers_count: t} = e;
                        n(t)
                    }
                    ).catch(e=>console.error(e))
                }
                , [t]),
                a) ? (0,
                s.jsxs)("a", {
                    className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                    href: t,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    "aria-label": "".concat(a, " stars on GitHub (opens in a new tab)"),
                    children: [(0,
                    s.jsx)(o.Z, {
                        use: "star",
                        className: "mr-1 h-3 w-3"
                    }), (0,
                    s.jsx)("span", {
                        children: Number(a).toLocaleString("en", {
                            useGrouping: !0
                        })
                    })]
                }) : null
            }
            ;
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)("ul", {
                    className: "group/list",
                    children: [{
                        title: "Projet MAUI : PocketBook de Recherche et de Stockage de Livres pour iPhone et Android",
                        link: "https://github.com/LouisDuf/Projet-MAUI",
                        image: "Ressources/images/MauiProject.png",
                        alt: "Image",
                        desc: "Création de l'application multiplateforme PocketBook avec MAUI, pour rechercher et stocker des livres sur iPhone et Android. L'application propose une interface intuitive pour rechercher des livres par titre, auteur ou genre, et permet de gérer une bibliothèque virtuelle personnelle. Grâce à MAUI, l'expérience utilisateur est cohérente et optimisée sur iOS et Android.",
                        tech: ["MAUI", "C#", ".NET", "Xaml"],
                    },
                    {
                        title: "Projet Swift : Élaboration du Jeu DouShouQI",
                        link: "https://github.com/LouisDuf/Projet-Swift",
                        image: "Ressources/images/SwiftIPad.png",
                        alt: "Image",
                        desc: "Développement d'une version moderne du jeu DouShouQI en utilisant Swift. En intégrant ARKit, les joueurs interagissent avec le plateau et les pièces en réalité augmentée. Utilisation de SpriteKit pour des graphismes fluides et animés, alliant tradition et modernité pour une expérience immersive.",
                        tech: ["Swift", "Arkit", "SpriteKit"],
                    },
                    {
                        title: "Projet React Native : Affiche de Film via l'Utilisation d'une API",
                        link: "https://github.com/LouisDuf/Affiche-de-film",
                        image: "Ressources/images/react-native.png",
                        alt: "Image",
                        desc: "Développement d'une application mobile en React Native pour afficher des informations sur des films via une API. L'application permet de rechercher des films, consulter des affiches, lire des synopsis, et obtenir des détails comme les notes, critiques et dates de sortie. Elle offre une interface élégante et réactive, avec des mises à jour en temps réel, disponible sur iOS et Android.",
                        tech: ["TypeScript", "React Native"],
                    },
                    {
                        title: "Projet Android : Application Cinéma",
                        link: "https://github.com/LouisDuf/Projet-Android",
                        image: "Ressources/images/AndroidImage.jpg",
                        alt: "Image",
                        desc: "Développement d'une application mobile dédiée au cinéma. Les utilisateurs peuvent consulter la liste des films à l'affiche et disponibles à l'achat. Une fonctionnalité de géolocalisation est prévue pour informer les utilisateurs des cinémas les plus proches proposant les films qu'ils souhaitent voir, pour une expérience personnalisée et pratique.",
                        tech: ["Kotlin", "Android", "API", "XML"],
                    }].map((t,a)=>(0,
                    s.jsx)("li", {
                        className: "mb-12",
                        children: (0,
                        s.jsxs)("div", {
                            className: "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                            children: [(0,
                            s.jsx)(i, {}), (0,
                            s.jsxs)("div", {
                                className: "z-10 sm:order-2 sm:col-span-6",
                                children: [(0,
                                s.jsx)("h3", {
                                    children: (0,
                                    s.jsx)(l.Z, {
                                        title: t.title,
                                        url: t.link,
                                        fill: !0
                                    })
                                }), (0,
                                s.jsx)("p", {
                                    className: "mt-2 text-sm leading-normal",
                                    children: t.desc
                                }), t.github && (0,
                                s.jsx)(e, {
                                    repoUrl: t.github
                                }), t.download && (0,
                                s.jsxs)("a", {
                                    className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                    href: t.download,
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    "aria-label": "Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)",
                                    children: [(0,
                                    s.jsx)(o.Z, {
                                        use: "download",
                                        className: "mr-1 h-4 w-4"
                                    }), (0,
                                    s.jsx)("span", {
                                        children: "100k+ Installs"
                                    })]
                                }), t.tech && (0,
                                s.jsx)("ul", {
                                    className: "mt-2 flex flex-wrap",
                                    "aria-label": "Technologies used:",
                                    children: t.tech.map((e,t)=>(0,
                                    s.jsx)("li", {
                                        className: "mr-1.5 mt-2",
                                        children: (0,
                                        s.jsx)(c.Z, {
                                            text: e
                                        })
                                    }, t))
                                })]
                            }), (0,
                            s.jsx)(x(), {
                                className: "rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1",
                                src: t.image,
                                alt: t.alt,
                                width: 200,
                                height: 48
                            })]
                        })
                    }, a))
                }), (0,
                s.jsx)("div", {
                    className: "mt-12",
                    children: (0,
                    s.jsx)(f, {
                        title: "Voir l'archive complète des projets",
                        url: "https://github.com/LouisDuf",
                        className: "font-semibold text-slate-200"
                    })
                })]
            })
        }
        var v = a(8425)
          , w = a(4910);
        function j() {
            let[e,t] = (0,
            r.useState)(null);
            return (0,
            s.jsx)("div", {
                ref: t,
                children: (0,
                s.jsxs)(w.fC, {
                    children: [(0,
                    s.jsx)(w.xz, {
                        asChild: !0,
                        children: (0,
                        s.jsxs)
                    }), (0,
                    s.jsxs)(w.h_, {
                        container: e,
                        children: [(0,
                        s.jsx)(w.aV, {
                            className: "DialogOverlay portal fixed left-0 top-0 z-40 h-screen w-screen bg-slate-900/10 backdrop-blur transition",
                            children: (0,
                            s.jsxs)("div", {
                                className: "portal-inner",
                                children: [(0,
                                s.jsx)("div", {}), (0,
                                s.jsx)("div", {}), (0,
                                s.jsx)("div", {}), (0,
                                s.jsx)("div", {}), (0,
                                s.jsx)("div", {})]
                            })
                        }), (0,
                        s.jsxs)(w.VY, {
                            className: "DialogContent fixed left-1/2 top-1/2 z-40 flex h-full w-full -translate-x-1/2 -translate-y-1/2 justify-center rounded sm:items-center",
                            children: [(0,
                            s.jsx)(w.x8, {
                                asChild: !0,
                                className: "absolute right-0 top-0",
                                children: (0,
                                s.jsx)("button", {
                                    className: "p-4 hover:text-slate-200 focus-visible:text-slate-200",
                                    "aria-label": "Close",
                                    children: (0,
                                    s.jsx)(o.Z, {
                                        use: "close",
                                        className: "h-7 w-7"
                                    })
                                })
                            }), (0,
                            s.jsx)("div", {
                                style: {
                                    perspective: "400px"
                                },
                                children: (0,
                                s.jsxs)("div", {
                                    className: "star-wars-skew",
                                    children: [(0,
                                    s.jsx)(w.Dx, {
                                        className: "mx-auto mb-12 max-w-xs text-center text-2xl font-semibold leading-tight tracking-tight text-slate-700 sm:text-3xl lg:max-w-md lg:text-4xl",
                                        children: "Looking for a different site? Go back in time..."
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "flex justify-center",
                                        children: (0,
                                        s.jsx)("ul", {
                                            className: "inline-grid grid-cols-1 gap-2 md:grid-cols-2",
                                            "aria-label": "Previous iterations of brittanychiang.com",
                                            children: [{
                                                title: "v1",
                                                label: "version 1",
                                                url: "https://v1.brittanychiang.com",
                                                image: "/images/old/v1.png"
                                            }, {
                                                title: "v2",
                                                label: "version 2",
                                                url: "https://v2.brittanychiang.com",
                                                image: "/images/old/v2.png"
                                            }, {
                                                title: "v3",
                                                label: "version 3",
                                                url: "https://v3.brittanychiang.com",
                                                image: "/images/old/v3.png"
                                            }, {
                                                title: "v4",
                                                label: "version 4",
                                                url: "https://v4.brittanychiang.com",
                                                image: "/images/old/v4.png"
                                            }].map((e,t)=>(0,
                                            s.jsx)("li", {
                                                children: (0,
                                                s.jsxs)("a", {
                                                    className: "group relative block transition-all",
                                                    href: e.url,
                                                    "aria-label": "brittanychiang.com ".concat(e.label),
                                                    children: [(0,
                                                    s.jsx)(x(), {
                                                        className: "mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl",
                                                        src: e.image,
                                                        alt: "Screenshot of brittanychiang.com ".concat(e.label),
                                                        width: 180,
                                                        height: 48
                                                    }), (0,
                                                    s.jsx)("div", {
                                                        className: "absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex",
                                                        children: (0,
                                                        s.jsx)("h3", {
                                                            className: "not-sr-only text-xl font-semibold text-white",
                                                            children: e.title
                                                        })
                                                    })]
                                                })
                                            }, t))
                                        })
                                    })]
                                })
                            }), (0,
                            s.jsx)("a", {
                                className: "absolute inset-x-0 bottom-0 z-40 block p-8 text-center text-xs text-slate-500 underline hover:text-slate-200 focus-visible:text-slate-200 sm:left-auto md:p-4",
                                href: "https://codepen.io/jasesmith/pen/qqgvZe",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                "aria-label": "Credit: A Portal to Tomorrow by @jasesmith (opens CodePen in a new tab)",
                                children: "A Portal to Tomorrow by @jasesmith"
                            })]
                        })]
                    })]
                })
            })
        }
        function k() {
            let e = (0,
            r.useRef)([]);
            (0,
            r.useEffect)(()=>{
                let t = document.querySelector(".nav");
                if (!t || window.innerWidth < 1024)
                    return;
                let a = "active"
                  , s = new IntersectionObserver(e=>{
                    e.forEach(e=>{
                        if (e.isIntersecting) {
                            let s = t.querySelector("a[href].".concat(a));
                            null == s || s.classList.remove(a);
                            let r = t.querySelector('a[href="#'.concat(e.target.id, '"]'));
                            null == r || r.classList.add(a)
                        }
                    }
                    )
                }
                ,{
                    rootMargin: "0% 0% -".concat(70, "% 0%"),
                    threshold: 0
                });
                e.current.forEach(e=>{
                    e && s.observe(e)
                }
                )
            }
            , []);
            let t = [{
                heading: "À propos",
                label: "About me",
                component: (0,
                s.jsx)(n, {})
            }, {
                heading: "Expérience",
                label: "Work experience",
                component: (0,
                s.jsx)(d, {})
            }, {
                heading: "Projets",
                label: "Selected projects",
                component: (0,
                s.jsx)(b, {})
            }];
            return (0,
            s.jsxs)("div", {
                className: "lg:flex lg:justify-between lg:gap-4",
                children: [(0,
                s.jsx)(v.Z, {
                    pathname: "/",
                    title: "Louis Dufour"
                }), (0,
                s.jsx)(u, {
                    sections: t
                }), (0,
                s.jsxs)("main", {
                    id: "content",
                    className: "pt-24 lg:w-1/2 lg:py-24",
                    children: [t.map((t,a)=>(0,
                    s.jsxs)("section", {
                        id: t.heading.toLowerCase(),
                        className: "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
                        "aria-label": t.label,
                        ref: t=>e.current[a] = t,
                        children: [(0,
                        s.jsx)("div", {
                            className: "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0",
                            children: (0,
                            s.jsx)("h2", {
                                className: "text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only",
                                children: t.heading
                            })
                        }), t.component]
                    }, a)), (0,
                    s.jsx)(m, {})]
                }), (0,
                s.jsx)(j, {})]
            })
        }
    }
}, function(e) {
    e.O(0, [664, 506, 774, 888, 179], function() {
        return e(e.s = 8312)
    }),
    _N_E = e.O()
}
]);