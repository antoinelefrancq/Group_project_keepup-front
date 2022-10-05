/* eslint-disable indent */
export const errorHandler = {
  
  signup: {
    firstname: {
        input(errors){
            return errors.firstname && errors.firstname.type === 'required'
              ? 'Le prénom est requis'
              : errors.firstname && errors.firstname.type === 'minLength'
              ? 'Le prénom doit faire minimum 3 caracteres'
              : errors.firstname && errors.firstname.type === 'maxLength'
              ? 'Le prénom ne doit pas faire plus de 30 caracteres'
              : 'Prénom';
          },
          style(errors){
            return {border: errors.firstname && '1px solid red'};
          }
    },

    lastname: {
        input(errors){
            return errors.lastname && errors.lastname.type === 'required'
            ? 'Le nom est requis'
            : errors.lastname && errors.lastname.type === 'minLength'
            ? 'Le nom doit faire minimum 3 caracteres'
            : errors.lastname && errors.lastname.type === 'maxLength'
            ? 'Le nom ne doit pas faire plus de 30 caracteres'
            : 'Nom';
          },
          style(errors){
            return {border: errors.lastname && '1px solid red'};
          }
    },

    email: {
        input(errors){
            return  errors.email && errors.email.type === 'required'
            ? 'L\'email est requis'
            : errors.email && errors.email.type === 'minLength'
            ? 'L\'email doit faire minimum 3 caracteres'
            : errors.email && errors.email.type === 'maxLength'
            ? 'L\'email ne doit pas faire plus de 100 caracteres'
            : errors.email && errors.email.type === 'pattern' ? 
            'L\'email n\'est pas valide' :
            'Email';
          },
          style(errors){
            return {border: errors.email && '1px solid red'};
          }
    },
    password: {
        input(errors){
            return errors.password && errors.password.type === 'required'
              ? 'Le mot de passe est requis'
              : errors.password && errors.password.type === 'minLength'
              ? 'Le prénom doit faire minimum 8 caracteres'
              : errors.password && errors.password.type === 'maxLength'
              ? 'Le prénom ne doit pas faire plus de 100 caracteres'
              : 'Mot de passe';
          },
          style(errors){
            return {border: errors.password && '1px solid red'};
          }
    },
    dob: {
        input(errors){
            return errors.dob && errors.dob.type === 'required'
              ? 'La date de naissance est requise'
              : 'Date de naissance';
          },
          style(errors){
            return {border: errors.dob && '1px solid red'};
          }
    },
    city: {
        input(errors){
            return errors.city && errors.city.type === 'required'
              ? 'La ville est requise'
              : errors.city && errors.city.type === 'minLength'
              ? 'La ville doit avoir minimum 2 caracteres'
              : errors.city && errors.city.type === 'maxLength'
              ? 'La ville ne doit pas faire plus de 250 caracteres'
              : 'Ville';
          },
          style(errors){
            return {border: errors.city && '1px solid red'};
          }
    },
    zipcode: {
        input(errors){
            return errors.zipcode && errors.zipcode.type === 'required'
              ? 'Le code postal est requise'
              : errors.zipcode && errors.zipcode.type === 'minLength'
              ? 'Le code postal doit avoir minimum 5 caracteres'
              : errors.zipcode && errors.zipcode.type === 'maxLength'
              ? 'Le code postal doit avoir maximum 5 caracteres': 
              errors.zipcode && errors.zipcode.type === 'pattern'
              ? 'Le code postal n\'est pas valide'
              : 'Code postal';
          },
          style(errors){
            return {border: errors.zipcode && '1px solid red'};
          }
    },
    description: {
        input(errors){
            return errors.description && errors.description.type === 'maxLength'
            ? 'La description doit avoir maximum 250 caracteres'
            : 'Commentaires...';
              
          },
          style(errors){
            return {border: errors.description && '1px solid red'};
          }
    },
  },

  
};
