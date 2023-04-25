var servicesScript = {};

servicesScript.inputs = {
    divMainBar: "#mainbar"
};

servicesScript.services = {
    service1: { 
        title: "Clases individuales", 
        description: "Nuestra plataforma está diseñada para que tu hijo practique y aprenda de forma independiente. Tu hijo puede aprender en casa con clases en vivo y en una plataforma completa y segura. Nuestro equipo de supervisores monitorea constantemente las clases.  <br/><br/> ¿Tu rutina es intensa? <br/> <br/> Aquí, tu eliges los horarios de estudio de tu hijo o hija. Agenda las clases, con hasta 24 horas de anticipación. Tu pequeño aprenderá inglés de forma independiente. Esto significa que tú no necesitas saber el idioma, ya que tendrá todo el soporte necesario." 
    },
    service2: { 
        title: "Clases grupales", 
        description: "Nuestros profesores nativos y bilingües se comunicarán con tu hijo en español y lo guiarán en su aprendizaje. Cada clase dura 25 minutos, el tiempo ideal para que tu hijo practique su pronunciación e interactúe con otros niños de su edad sin perder el foco. ¡Elige los horarios que se ajusten a tu rutina! Tenemos clases disponibles todos los días, entre las 9 am y las 9 pm (GMT-5). <br/><br/> Los grupos son de hasta 5 estudiantes con edades y niveles similares. El objetivo principal es fomentar la conversación en inglés con la orientación del profesor, quien los anima a participar a todos por igual. El profesor es el mediador de los diálogos e incentiva la comunicación entre los estudiantes, corrigiendo la pronunciación y dándoles feedback inmediato a cada uno. Durante las clases, tu hijo hará actividades lúdicas de acuerdo a su nivel y edad, como palabras cruzadas y juegos de tres en raya. Esto incentiva la motivación y la atención de los estudiantes." 
    },
    service3: { 
        title: "Clases Play2Learn", 
        description: "Tu hijo podrá practicar su pronunciación o participar de una divertida dinámica de aprendizaje junto a otros niños de Latinoamérica. Las clases Play2Learn también duran un aproximado de 25 minutos. Tiempo en el que tu hijo participa de actividades y juegos en inglés, aumentando su comprensión del idioma. ¡Elige los horarios que se ajusten a tu rutina! Tenemos clases disponibles todos los días, entre las 9 am y las 9 pm (GMT-5). <br/><br/> Este tipo de clase transforma nuestras aulas en un show de juegos en donde tu hijo podrá participar y aprender nuevo vocabulario en inglés, de manera interactiva y súper divertida. El profesor se convertirá en el anfitrión del juego, en donde tu hijo, junto a otros niños de su misma edad y nivel de inglés, participarán de dinámicas divertidas para profundizar en su aprendizaje del idioma. Durante las clases, le propondremos diferentes actividades, a modo de juego, para que tu hijo participe y ponga a prueba todos sus conocimientos del idioma; nuestra clase está diseñada para que la participación sea en la misma plataforma, de manera muy divertida e intuitiva." 
    },
    service4: { title: "Pago en linea", description: "KidKinder pone a su disposición el servicio de pago en línea mediante los siguientes bancos para el pago de infracciones y la tramitología de licencias. Consulte como realizar sus pagos 100% online de forma rapida, sencilla y segura." },
};


$(document).ready(function () {
    servicesScript.loadServicesInsideHtml();
});


servicesScript.loadServicesInsideHtml = () => {
    let service1 = servicesScript.FillHtml(servicesScript.services.service1.title, servicesScript.services.service1.description);
    let service2 = servicesScript.FillHtml(servicesScript.services.service2.title, servicesScript.services.service2.description);
    let service3 = servicesScript.FillHtml(servicesScript.services.service3.title, servicesScript.services.service3.description);
    let service4 = servicesScript.FillHtml(servicesScript.services.service4.title, servicesScript.services.service4.description);

    $(servicesScript.inputs.divMainBar).append(service1);
    $(servicesScript.inputs.divMainBar).append(service2);
    $(servicesScript.inputs.divMainBar).append(service3);
    $(servicesScript.inputs.divMainBar).append(service4);

};


servicesScript.FillHtml = (title, description) => {
    return '<div class="article">' +
        '<h2>' + title + '</h2>' +
        '<div class="clr"></div>' +
        '<p style="text-align: justify;">' + description + '</p>' +
        '</div>';
};
