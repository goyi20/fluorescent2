//In a University, there is a classroom, in that classroom, there are 4 fluorescent tube units, each
//unit contains 4 fluorescent tubes.
//The classroom is used 15 hours a day, 5 times a week, 9 months a year.

// 15 horas por día, 75 horas a la semana, 300 horas al mes = 2700 horas en 9 meses (1 año)

//Every fluorescent tube works for a fixed amount of hours, that amount is returned by a function
//called "rand()" that returns an integer number from 100 to 200 that represents the number of
//hours that the fluorescent tube will work before breaking.
//Once 2 fluorescent tubes fail in a single unit, you should replace all 4 tubes.
//Each fluorescent tube costs 7 U$D.

const rand = () => Math.floor(Math.random() * 100) + 100;

function romper_tubos (){
    let tubo1 = rand();
    let tubo2 = rand();
    let tubo3 = rand();
    let tubo4 = rand();
    let tubos_rotos = 0;
    let horas = 0;
    let rotos = 0;

    for(horas = 0; horas <= 2700; horas++){
        tubo1--; 
        tubo2--;
        tubo3--;
        tubo4--;
        if(tubo1 === 0 || tubo2 === 0 || tubo3 === 0 || tubo4 === 0){
            rotos++
            if(rotos === 2){
                tubo1 = rand();
                tubo2 = rand();
                tubo3 = rand();
                tubo4 = rand();
                tubos_rotos++;
                rotos = 0;
            }
        }
    }
    console.log(tubos_rotos)
    return tubos_rotos;
}
const tubos_rotos_unidad1 = romper_tubos();
const tubos_rotos_unidad2 = romper_tubos();
const tubos_rotos_unidad3 = romper_tubos();
const tubos_rotos_unidad4 = romper_tubos();

const tubos_rotos_total = tubos_rotos_unidad1 + tubos_rotos_unidad2 + tubos_rotos_unidad3 + tubos_rotos_unidad4;

const costo_tubos = tubos_rotos_total*7;


//The algorithm should print:
//1. How many fluorescent tubes were broken in 1 year in that classroom?

document.write("1. How many fluorescent tubes were broken in 1 year in that classroom? <br>")
document.write("In one year, in that classroom, ", tubos_rotos_total, " fluorescent tubes were broken <br>")

//2. How much money do fluorescent tubes cost the University per year per classroom?
document.write("2. How much money do fluorescent tubes cost the University per year per classroom? <br>")
document.write("The fluorescent tubes costs to the University ", costo_tubos, " U$D per year per classroom <br>")









