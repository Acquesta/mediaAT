let ac = [ 9.8 ]

let agh =7.3

let tri1 = [ 8.9 ]

let tri2 = [ 8.2  ]

let tri3 = []

let at = []

let materias = [ "port" , "pit" , 'mat' , 'heg' , 'fis' , 'qui' , 'bio' , 'socio' , 'art' , 'ing' , 'ads' , 'bd2' ,'inw' , 'lp2' , 'cog', 'rcs', 'ed']

for(let i = 0; i < ac.length; i++){

    tri3.push((( tri1[i] + tri2[i] * 2 ) - 36 ) / 3 )

    at.push(((ac[i] * 3 + agh * 2) + tri3[i] * 10 ) / 5)

    console.log("Nota para tirar na AT para passar de ano: " + materias[i] + " "  + at[i])
    console.log("Nota para média do trimestre: " + materias[i] + " " + tri3[i])

}

// 5,58