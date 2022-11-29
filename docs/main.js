let root = document.getElementById("root");
let form = document.createElement('form');
root.append(form);
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let h2 = document.createElement('h2')
form.append(h2)
h2.textContent="Calculador de sueldo";
//primer div

//input 1
form.append(div1);
div1.id="div1"
let label1 = document.createElement('label')
div1.append(label1)
label1.textContent ="Ingresar Nombre:"
let inputName = document.createElement('input');
div1.append(inputName)
inputName.placeholder="ingrese su nombre"
inputName.id="nombre"
let br1 = document.createElement('br');
div1.append(br1)

//input2
let label2 = document.createElement('label')
div1.append(label2)
label2.textContent ="Ingresar Apellido:"
let inputLastName = document.createElement('input');
div1.append(inputLastName)
inputLastName.placeholder="ingrese su Apellido"
inputLastName.id="apellido"
let br2 = document.createElement('br');
div1.append(br2)

//select 1
let label3 = document.createElement('label');
div1.append(label3)
label3.textContent ="Selecionar Categoria:"
let select = document.createElement('select');
div1.append(select)
select.name="categoria"
select.id="categoria"
let option1 = document.createElement('option')
let option2 = document.createElement('option')
let option3 = document.createElement('option')
select.append(option1)
option1.textContent="A"
select.append(option2)
option2.textContent="B"
select.append(option3)
option3.textContent="C"
let br3 = document.createElement('br');
div1.append(br3)

//select2
let label4 = document.createElement('label');
div1.append(label4)
label4.textContent ="Selecionar Tiempo de servicio:"
let select2 = document.createElement('select');
div1.append(select2)
select2.name="tiempo"
select2.id="tiempo"
let option01 = document.createElement('option')
let option02 = document.createElement('option')
let option03 = document.createElement('option')
let option04 = document.createElement('option')
select2.append(option01)
option01.textContent="1-3"
select2.append(option02)
option02.textContent="4-7"
select2.append(option03)
option03.textContent="8-12"
select2.append(option04)
option04.textContent="13-mas"


//segundo div
form.append(div2);
div2.id="div2"
let btn = document.createElement('button');
div2.append(btn)
btn.textContent="calcular"
btn.id="button"
btn.type="button"

//tercer Div
form.append(div3);
div3.id="div3"
let res1 = document.createElement('p')
div3.append(res1)
let br02 =document.createElement('br')
div3.append(br02)
let res2 = document.createElement('p')
div3.append(res2)
let br03 =document.createElement('br')
div3.append(br03)
let res3  = document.createElement('p')
div3.append(res3)

let br04 =document.createElement('br')
div3.append(br04)
let res4  = document.createElement('p')
div3.append(res4)
btn.addEventListener("click",()=>{
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let tiempo = document.getElementById('tiempo').value;
    let categoria = document.getElementById('categoria').value;
    let respuest1 =nombre+' '+apellido+' de categoria '+categoria+' y con '+tiempo+' años de servicio le corresponde lo sigiente:'  
    res1.textContent=respuest1

    //Respuesta 2
    if (categoria ==='A'){
        //codigo Categoria A
        let tarrifa = 40;
        var sueldo = tarrifa*8*30
    }else{
        if (categoria ==='B') {
            //codigo categoria B
            let tarrifa = 35;
            var sueldo = tarrifa*8*30
        }else{
            //Codigo categoria C
            let tarrifa = 30;
            var sueldo = tarrifa*8*30
        }
    }
    let mensaje01 = "su sueldo Basico es:"+sueldo+" soles";
    res2.textContent=mensaje01
    if (tiempo==='1-3'){
        //de 1 a 3
        let bono = 0.15
        var totalBono = sueldo*bono
    }else{
        if (tiempo ==='4-7') {
            //de 4 a 7
            let bono=0.20
            var totalBono = sueldo*bono
        }else{
            if (tiempo==='8-12') {
                //de 8 a 12
                let bono=0.30
                var totalBono = sueldo*bono
            }else{
                // de 13 a mas
                let bono = 0.35
                var totalBono = sueldo*bono
            }
        }
    }
let respuesta2="su bono por años de servicio es:"+totalBono+" soles";
res3.textContent=respuesta2
let totalPago = sueldo+totalBono
res4.textContent="Usted Recibira:"+totalPago+" soles"
}
)
