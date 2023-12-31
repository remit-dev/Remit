window.onload = function() {
    const t = document.querySelector("body");
    document.querySelectorAll('[data-rt*="c_bn"]').forEach((t => {
        t.onclick = () => t.parentElement.style.display = "none"
    })), document.querySelectorAll('[data-rt*="bgc_"]').forEach((t => {
        t.style.backgroundColor = t.getAttribute("data-rt").match(/bgc_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="crc_"]').forEach((t => {
        t.style.color = t.getAttribute("data-rt").match(/crc_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="bdc_"]').forEach((t => {
        t.style.borderColor = t.getAttribute("data-rt").match(/bdc_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="bd_"]').forEach((t => {
        t.style.border = t.getAttribute("data-rt").match(/bd_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="bxs_"]').forEach((t => {
        t.style.boxShadow = t.getAttribute("data-rt").match(/bxs_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="ht_"]').forEach((t => {
        t.style.height = t.getAttribute("data-rt").match(/ht_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="mxh_"]').forEach((t => {
        t.style.maxHeight = t.getAttribute("data-rt").match(/mxh_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="mnh_"]').forEach((t => {
        t.style.minHeight = t.getAttribute("data-rt").match(/mnh_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="wt_"]').forEach((t => {
        t.style.width = t.getAttribute("data-rt").match(/wt_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="mxw_"]').forEach((t => {
        t.style.maxWidth = t.getAttribute("data-rt").match(/mxw_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="mnw_"]').forEach((t => {
        t.style.minWidth = t.getAttribute("data-rt").match(/mnw_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="bdw_"]').forEach((t => {
        t.style.borderWidth = t.getAttribute("data-rt").match(/bdw_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="bdr_"]').forEach((t => {
        t.style.borderRadius = t.getAttribute("data-rt").match(/bdr_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="pd_"]').forEach((t => {
        t.style.padding = t.getAttribute("data-rt").match(/pd_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="ol_"]').forEach((t => {
        t.style.outline = t.getAttribute("data-rt").match(/ol_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="mg_"]').forEach((t => {
        t.style.margin = t.getAttribute("data-rt").match(/mg_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="fts_"]').forEach((t => {
        t.style.fontSize = t.getAttribute("data-rt").match(/fts_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="thfs_"]').forEach((t => {
        t.querySelectorAll("th").forEach((e => {
            e.style.fontSize = t.getAttribute("data-rt").match(/thfs_(\S+)/)[1]
        }))
    })), document.querySelectorAll('[data-rt*="tdfs_"]').forEach((t => {
        t.querySelectorAll("td").forEach((e => {
            e.style.fontSize = t.getAttribute("data-rt").match(/tdfs_(\S+)/)[1]
        }))
    })), document.querySelectorAll('[data-rt*="wds_"]').forEach((t => {
        t.style.wordSpacing = t.getAttribute("data-rt").match(/wds_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="lt_"]').forEach((t => {
        t.style.left = t.getAttribute("data-rt").match(/lt_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="rt_"]').forEach((t => {
        t.style.right = t.getAttribute("data-rt").match(/rt_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="tp_"]').forEach((t => {
        t.style.top = t.getAttribute("data-rt").match(/tp_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="bm_"]').forEach((t => {
        t.style.bottom = t.getAttribute("data-rt").match(/bm_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="lnh_"]').forEach((t => {
        t.style.lineHeight = t.getAttribute("data-rt").match(/lnh_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="lst_"]').forEach((t => {
        t.style.listStyleType = t.getAttribute("data-rt").match(/lst_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="dp_"]').forEach((t => {
        t.style.display = t.getAttribute("data-rt").match(/dp_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="gdtc_"]').forEach((t => {
        t.style.gridTemplateColumns = t.getAttribute("data-rt").match(/gdtc_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="gdtr_"]').forEach((t => {
        t.style.gridTemplateRows = t.getAttribute("data-rt").match(/gdtr_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="gdc_"]').forEach((t => {
        t.style.gridColumn = t.getAttribute("data-rt").match(/gdc_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="gdr_"]').forEach((t => {
        t.style.gridRow = t.getAttribute("data-rt").match(/gdr_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="gdaf_"]').forEach((t => {
        t.style.gridAutoFlow = t.getAttribute("data-rt").match(/gdaf_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="op_"]').forEach((t => {
        t.style.opacity = t.getAttribute("data-rt").match(/op_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="gp_"]').forEach((t => {
        t.style.gap = t.getAttribute("data-rt").match(/gp_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="tbb_"]').forEach((t => {
        t.style.border = t.querySelectorAll("th, td").forEach((e => {
            e.style.border = t.getAttribute("data-rt").match(/tbb_(\S+)/)[1].replaceAll("_", " ")
        }))
    })), document.querySelectorAll('[data-rt*="tbp_"]').forEach((t => {
        t.querySelectorAll("th, td").forEach((e => {
            e.style.padding = t.getAttribute("data-rt").match(/tbp_(\S+)/)[1].replaceAll("_", " ")
        }))
    })), document.querySelectorAll('[data-rt*="zi_"]').forEach((t => {
        t.style.zIndex = t.getAttribute("data-rt").match(/zi_(\S+)/)[1]
    })), document.querySelectorAll('[data-rt*="mdl"]').forEach((e => {
        let r = e.querySelector('[data-rt*="mbn"]'),
            l = e.querySelector('[data-rt*="ctn"]');
        r && r.addEventListener("click", (function() {
            l && (l.style.display = "block", t.style.overflow = "hidden")
        })), e.querySelectorAll('[data-rt*="cmdl"]').forEach((e => {
            e.addEventListener("click", (function() {
                l && (l.style.display = "none", t.style.overflow = "auto")
            }))
        }))
    })), document.querySelectorAll('[data-rt*="tltw_"]').forEach((t => {
        t.style.setProperty("--tltw", t.getAttribute("data-rt").match(/tltw_(\S+)/)[1])
    })), document.querySelectorAll('[data-rt*="tltd_"]').forEach((t => {
        t.style.setProperty("--tltb", t.getAttribute("data-rt").match(/tltd_(\S+)/)[1])
    })), document.querySelectorAll('[data-rt*="tltc_"]').forEach((t => {
        t.style.setProperty("--tltc", t.getAttribute("data-rt").match(/tltc_(\S+)/)[1])
    })), document.querySelectorAll('[data-rt*="tns_"]').forEach((t => {
        t.style.transition = t.getAttribute("data-rt").match(/tns_(\S+)/)[1].replaceAll("_", " ")
    })), document.querySelectorAll('[data-rt*="tnf_"]').forEach((t => {
        t.style.transform = t.getAttribute("data-rt").match(/tnf_(\S+)/)[1].replaceAll("_", " ")
    }));
    let e = document.querySelectorAll('[data-rt*="sdc"]');
    for (let t = 0; t < e.length; t++) {
        let r = e[t].querySelector('[data-rt*="sdr"]'),
            l = r.children,
            a = e[t].querySelector('[data-rt*="prev"]'),
            c = e[t].querySelector('[data-rt*="next"]'),
            o = 0;
        l[o].setAttribute("data-rt", "act"), c.addEventListener("click", (function() {
            l[o].removeAttribute("data-rt"), o === l.length - 1 ? o = 0 : o += 1, l[o].setAttribute("data-rt", "act");
            let t = "translateX(-" + 100 * o + "%)";
            r.style.transform = t
        })), a.addEventListener("click", (function() {
            l[o].removeAttribute("data-rt"), 0 === o ? o = l.length - 1 : o -= 1, l[o].setAttribute("data-rt", "act");
            let t = "translateX(-" + 100 * o + "%)";
            r.style.transform = t
        }))
    }
    document.querySelectorAll('[data-rt*="dd_nb"]').forEach((t => {
        document.querySelectorAll('[data-rt*="stb"]').forEach((t => {
            t.addEventListener("click", (function() {
                t.classList.toggle("tg")
            }))
        }));
        const e = t.querySelector("ul");
        e.classList = "nav-con";
        let r = t.querySelectorAll("li");
        document.createElement("ul");
        for (var l = 0; l < r.length; l++) {
            let t = r[l].textContent;
            if (t.startsWith("_")) {
                let e = r[l].previousElementSibling;
                if ("_" !== e.textContent.charAt(0) && (e.classList = "on-sb", e.appendChild(r[l]), t.startsWith("__"))) {
                    let t = r[l].previousElementSibling;
                    if (mt = t.textContent, r[l].classList = "dd-lt", "_" !== mt.charAt(1)) {
                        let e = document.createElement("ul");
                        e.classList = "sb-sb", t.classList = "dd-ft", t.appendChild(e)
                    }
                }
            }
        }
        var a = document.querySelectorAll(".on-sb>a");
        for (l = 0; l < a.length; l++) {
            var c = a[l].parentElement,
                o = document.createElement("ul");
            o.classList = "sb";
            for (var d = c.querySelectorAll("li"), n = 0; n < d.length; n++) {
                var u = d[n];
                o.appendChild(u)
            }
            c.appendChild(o)
        }
        var s = document.getElementsByClassName("dd-ft");
        for (l = 0; l < s.length; l++)
            for (var i = s[l].nextElementSibling; i && i.classList.contains("dd-lt");) s[l].querySelector("ul").appendChild(i), i = s[l].nextElementSibling;
        let h = t.querySelectorAll("a");
        for (let t of h) {
            let e = t.textContent.replace(/_/g, "");
            t.textContent = e
        }
        t.querySelector('[data-rt*="nv_sw"]').addEventListener("click", (function() {
            e.classList.toggle("show")
        })), t.querySelector('[data-rt*="nv_hd"]').addEventListener("click", (function() {
            e.classList.remove("show")
        }));
        let m = document.querySelectorAll(".on-sb");
        for (let t = 0; t < m.length; t++) m[t].addEventListener("click", (function() {
            let e = m[t].querySelectorAll(".sb");
            for (let t = 0; t < e.length; t++) {
                e[t].classList.toggle("sb-tg");
                let r = e[t].querySelectorAll(".dd-ft");
                for (let t = 0; t < r.length; t++) r[t].addEventListener("click", (function() {
                    let e = r[t].querySelectorAll(".sb-sb");
                    event.stopPropagation();
                    for (let t = 0; t < e.length; t++) e[t].classList.toggle("sb-sb-tg")
                }))
            }
        }))
    }))
};
