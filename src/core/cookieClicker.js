//w = 390 h = 690

export default function startGame() {

    var cookies = 0;
    var cpc = 1;
    var cpcp = 10;
    var cps = 0;
    var cpsp = 50;
    var tick = 0;

    var canEarn = true;

    var cursor = add([
        sprite("cursor"),
        pos(-100,0),
        scale(3),
        z(1000)
    ])

    
    var title = add([
        text("Cookie Clicker"),
        pos(390/2, 70),
        origin("center"),
        scale(4),
    ])

    var cookie = add([
        sprite("cookie"),
        pos(390/2, 230),
        origin("center"),
        scale(12),
        area(),
        "cookie"
    ])

    

    var cpspt = add([
        text(cpsp),
        pos(390/4 + 390/8 + 390/2, 690-50),
        origin("center"),
        scale(2),
        z(100),
    ])

    var cpcpt = add([
        text(cpcp),
        pos(390/4 + 390/8, 690-50),
        origin("center"),
        scale(2),
        z(100),
    ])

    onClick("cpsp", () => {
        if (cookies >= cpsp) {
            cookies -= cpsp;
        cpsp *= 1.5;
        cps++
        cpspt.use(text(Math.round(cpsp)));
        
        }
    })
    onClick("cpcp", () => {
        if (cookies >= cpcp) {
            cookies -= cpcp;
        cpcp *= 1.5;
        cpc++
        cpcpt.use(text(Math.round(cpcp)));
        
        }
    })

    var cpcb = add([
        sprite("cpc"),
        pos(390/4, 690-50),
        origin("center"),
        scale(3),
        area(),
        "cpcp"
    ])

    var cpsb = add([
        sprite("cps"),
        pos(390/4 + 390/2, 690-50),
        origin("center"),
        scale(3),
        area(),
        "cpsp"
    ])



    var cookietext = add([
        text("Cookies: " + cookies + " \n CPS: " + cps + " \n CPC: " + cpc),
        pos(390/2, 400),
        origin("center"),
        scale(3),
    ])

    onClick("cookie", (c) => {
        cookies += cpc;

    })

    cursor.onUpdate(() => {
        cookies = Math.round(cookies);
        cursor.pos = mousePos()
        tick++;
        if (tick > 15) {
            cookietext.use(text("Cookies: " + cookies + " \n CPS: " + cps + " \n CPC: " + cpc))
            tick = 0
        }
        
    })

    loop(1, () => {
            cookies += cps;
    })
}
