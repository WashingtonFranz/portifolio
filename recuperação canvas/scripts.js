const ctx = document.getElementById('exemplo').getContext('2d');    //contexto, será acessado para manipular conteúdo do canvas;

/** ctx.save() salva e ctx.restore() restaura estado atual, a partir de numa pilha: 
 * São salvos:
 *      Transformações: translate, rotate and scale;
 *      Valores dos atributos: 
 *         strokeStyle, fillStyle, globalAlpha, 
 *         lineWidth, lineCap, lineJoin, miterLimit, 
 *         lineDashOffset, shadowOffsetX, shadowOffsetY, 
 *         shadowBlur, shadowColor, globalCompositeOperation, 
 *         font, textAlign, textBaseline, direction, 
 *         imageSmoothingEnabled.
 *      Clipping path;
 */

/** globalCompositeOperation = type define o tipo de composição entre objetos.
 * 
 */

//Gabarito A: 2 planetas ao redor do sol


const centroX = 600;
const centroY = 300;
const orbt_sz = 160;        //tamanho da órbita da Terra
const orbm_sz = 220;        //tamanho da órbita da Terra
const orbj_sz = 270;        //tamanho da órbita da jupiter
const orbs_sz = 330;        //tamanho da órbita da saturno
const orbl_sz = 30;         //tamanho da órbita da lua
const orblm_sz = 30;        //tamanho da órbita da lua de marte
const orblj_sz = 30;        //tamanho da órbita da lua de jupiter
const orbls_sz = 30;        //tamanho da órbita da lua de saturno

const sol_sz = 50;          //tamanho do sol
const lua_sz = 5;          //tamanho da lua
const luam_sz = 4;         //tamanho da lua de marte
const luaj_sz = 4;         //tamanho da lua de jupiter
const luas_sz = 4;         //tamanho da órbita da lua de saturno
const terra_sz = 15;        //tamanho da Terra
const marte_sz = 12;
const jupiter_sz = 12;
const saturno_sz = 8;
const tau = 2 * Math.PI;    //útil para cálculos de circunferência
const t_terra = 30;         //segundos por volta da terra (máx 60!)
const t_lua = 3;            //segundos por volta da lua (máx 60!)
const t_marte = 20;
const t_jupiter = 15;
const t_saturno = 10;
const t_luam = 4;
const t_luaj = 4;
const t_luas = 4;

const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();
const marte = new Path2D();
const jupiter = new Path2D();
const saturno = new Path2D();
const luam = new Path2D();
const luaj = new Path2D();
const luas = new Path2D();

function init() {
    sol.arc(0,0,sol_sz,0,tau,false);
    lua.arc(0,0,lua_sz,0,tau,false);
    terra.arc(0,0,terra_sz,0,tau,false);
    luam.arc(0,0,luam_sz,0,tau,false);
    luaj.arc(0,0,luaj_sz,0,tau,false);
    marte.arc(0,0,marte_sz,0,tau,false);
    jupiter.arc(0,0,jupiter_sz,0,tau,false);
    saturno.arc(0,0,saturno_sz,0,tau,false);
    luas.arc(0,0,luas_sz,0,tau,false);

    window.requestAnimationFrame(draw);
}

function draw() {
    //ctx.globalCompositeOperation = 'destination-over';
    ctx.fillRect(0, 0, 1200, 600); // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.save(); // terra
        ctx.translate(centroX, centroY);    //centro do sol
        
        const time = new Date();
        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(orbt_sz, 0);      //distância da órbita ao sol

        ctx.fillStyle = '#7cf';
        ctx.fill(terra); 

        // lua
        ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_sz);
            ctx.fillStyle = 'white';
            ctx.fill(lua);
        ctx.restore();  //restaura pré-lua

        
        // Desenho da Órbita da lua - pedir para alunos
        ctx.beginPath();
        ctx.arc(0, 0, orbl_sz, 0, tau, false);
        ctx.strokeStyle = '#fff4';
        ctx.stroke();

    ctx.restore();  //restaura pré-terra

    // Desenho da Órbita da terra
    ctx.beginPath();
    ctx.arc(centroX, centroY, orbt_sz, 0, tau, false);
    ctx.strokeStyle = '#7cf6';
    ctx.stroke();

    
    //marte:

    ctx.save();
        ctx.translate(centroX, centroY);    //centro do sol
        
        ctx.rotate((tau/t_marte) * time.getSeconds() + (tau/(t_marte*1000)) * time.getMilliseconds());
        ctx.translate(orbm_sz, 0);      //distância da órbita ao sol

        ctx.fillStyle = 'red';
        ctx.fill(marte); 

        // lua
        ctx.save();
            ctx.rotate((tau/t_luam) * time.getSeconds() + (tau/(t_luam*1000)) * time.getMilliseconds());
            ctx.translate(0, orblm_sz);
            ctx.fillStyle = 'white';
            ctx.fill(luam);
        ctx.restore();  //restaura pré-lua
        
        // Desenho da Órbita da lua 
        ctx.beginPath();
        ctx.arc(0, 0, orblm_sz, 0, tau, false);
        ctx.strokeStyle = '#fff4';
        ctx.stroke();


    ctx.restore();  //restaura pré-terra

    // Desenho da Órbita da terra
    ctx.beginPath();
    ctx.arc(centroX, centroY, orbm_sz, 0, tau, false);
    ctx.strokeStyle = '#7cf6';
    ctx.stroke();

          //jupiter:

    ctx.save();
    ctx.translate(centroX, centroY);    //centro do sol
    
    ctx.rotate((tau/t_jupiter) * time.getSeconds() + (tau/(t_jupiter*1000)) * time.getMilliseconds());
    ctx.translate(orbj_sz, 0);      //distância da órbita ao sol

    ctx.fillStyle = '#5C4033';
    ctx.fill(jupiter); 

    // lua
    ctx.save();
        ctx.rotate((tau/t_luaj) * time.getSeconds() + (tau/(t_luaj*1000)) * time.getMilliseconds());
        ctx.translate(0, orblj_sz);
        ctx.fillStyle = 'white';
        ctx.fill(luaj);
     ctx.restore();  //restaura pré-lua
    
        // Desenho da Órbita da lua 
        ctx.beginPath();
        ctx.arc(0, 0, orblj_sz, 0, tau, false);
        ctx.strokeStyle = '#fff4';
        ctx.stroke();


        ctx.restore();  //restaura pré-terra

        // Desenho da Órbita de jupiter
        ctx.beginPath();
        ctx.arc(centroX, centroY, orbj_sz, 0, tau, false);
        ctx.strokeStyle = '#7cf6';
        ctx.stroke();
  
            ctx.restore();  //restaura pré-terra
            
        //saturno:

        ctx.save();
        ctx.translate(centroX, centroY);    //centro do sol
        
        ctx.rotate((tau/t_saturno) * time.getSeconds() + (tau/(t_saturno*1000)) * time.getMilliseconds());
        ctx.translate(orbs_sz, 0);      //distância da órbita ao sol

        ctx.fillStyle = '#ffff00';
        ctx.fill(saturno); 

        // lua
        ctx.save();
            ctx.rotate((tau/t_luas) * time.getSeconds() + (tau/(t_luas*1000)) * time.getMilliseconds());
            ctx.translate(0, orbls_sz);
            ctx.fillStyle = 'white';
            ctx.fill(luas);
        ctx.restore();  //restaura pré-lua
        
        // Desenho da Órbita da lua 
        ctx.beginPath();
        ctx.arc(0, 0, orbls_sz, 0, tau, false);
        ctx.strokeStyle = '#fff4';
        ctx.stroke();


        ctx.restore();  //restaura pré-terra

        // Desenho da Órbita da terra
        ctx.beginPath();
        ctx.arc(centroX, centroY, orbs_sz, 0, tau, false);
        ctx.strokeStyle = '#7cf6';
        ctx.stroke();




    // sol
    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'orange';
        ctx.fill(sol);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#fd2';
        ctx.stroke(sol);
    ctx.restore();

    window.requestAnimationFrame(draw);
}

init();
