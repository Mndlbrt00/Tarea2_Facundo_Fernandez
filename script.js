const FORM_HTML = {
    FORM: document.querySelector('#registro'),
    FIELDS: {
            NAME: document.querySelector('#nombre'),
            AGE: document.getElementById('edad'),
    },
    STATUS:{
        NAME_OK: false,
        AGE_OK: false,
    },
    MENSAJE_NOMBRE: document.querySelector('#mensaje-nombre'),
    MENSAJE_EDAD: document.querySelector('#mensaje-edad'),
    handleSubmit(event) {
        event.preventDefault();
        const new_name = event.target.nombre.value
        if (!new_name) {
            FORM_HTML.STATUS.NAME_OK = false,
            FORM_HTML.MENSAJE_NOMBRE.innerText= 'El nombre es obligatorio'
        }
        else if (new_name.length > 30) {
            FORM_HTML.STATUS.NAME_OK = false,
            FORM_HTML.MENSAJE_NOMBRE.innerText= 'El nombre es muy largo'
        }
        else {
            FORM_HTML.STATUS.NAME_OK = true,
            FORM_HTML.MENSAJE_NOMBRE.innerText= ''
        } 
        const new_age = event.target.edad.value
        if (!new_age) {
            FORM_HTML.STATUS.AGE_OK = false,
            FORM_HTML.MENSAJE_EDAD.innerText= 'La edad es obligatoria'
        }
        else if (new_age < 0) {
            FORM_HTML.STATUS.AGE_OK = false,
            FORM_HTML.MENSAJE_EDAD.innerText= 'Ingrese una edad válida'
        }
        else if (new_age >= 18) {
            FORM_HTML.STATUS.AGE_OK = true
            
        }
        else {
            FORM_HTML.STATUS.AGE_OK = false;
            if (FORM_HTML.STATUS.NAME_OK){
            FORM_HTML.MENSAJE_EDAD.innerText= '❌ Lo sentimos, '+ new_name + ', debes ser mayor de edad.'
            }
            else {
                FORM_HTML.MENSAJE_EDAD.innerText= '❌ Lo sentimos, debes ser mayor de edad.'
            }
        }
            
        if (FORM_HTML.STATUS.NAME_OK && FORM_HTML.STATUS.AGE_OK) {
            FORM_HTML.MENSAJE_EDAD.classList.add('success')
            FORM_HTML.MENSAJE_EDAD.classList.remove('error')
            FORM_HTML.MENSAJE_EDAD.innerText= '✅Bienvenido/a ' + new_name + ', tienes acceso al evento.'
            event.target.reset()
        }
        else {
            FORM_HTML.MENSAJE_EDAD.classList.add('error')
            FORM_HTML.MENSAJE_EDAD.classList.remove('success')
        } 
    },
};



FORM_HTML.FORM.addEventListener(
    'submit',
    FORM_HTML.handleSubmit

) 