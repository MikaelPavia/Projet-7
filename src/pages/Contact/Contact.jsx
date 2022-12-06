import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required('Merci de rentrer votre nom et prénom'),
      email: yup
        .string()
        .email('Merci de renter une adresse mail valide')
        .max(255)
        .required('Merci de rentrer une adresse mail'),
      phone: yup
        .number()
        .typeError('Merci de rentrer une numero de téléphone valide')
        .required('Merci de rentrer un numero de téléphone'),
      message: yup.string().required('Merci de rentrer un message'),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const onSubmit = (data, r) => {
    alert("Merci d'avoir rempli notre formulaire");
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    

    sendFeedBack(serviceId, templateId, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.Subject,
      message: data.message,
      reply_to: r.target.reset()
    }) 
  };

  const sendFeedBack = (serviceId, templateId, variables) => {
    emailjs
    .send(serviceId, templateId, variables, publicKey)
    .then((res) => {
      console.log('Success')
    })
    .catch((err) => {
      console.error('Il y a un erreur dans l\'envoi du formualire')
    })
  };

  return (
    <div>
      <h1 className="h1-contact">Formulaire de Contact</h1>

      <form className="contact-form"  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-content">
          <label htmlfor="name" className="label-contact">
            Nom et Prenom :
          </label>
          <input
            className="input-contact"
            type="text"
            id="name"
            name="name"
            placeholder="Nom et Prenom"
            {...register('name')}
          />
          {errors.name && <p id="c-yup">{errors.name.message}</p>}
          <label htmlfor="email" className="label-contact">
            Adresse mail :
          </label>
          <input
            className="input-contact"
            type="email"
            id="email"
            name="email"
            placeholder="exemple@gmail.com"
            {...register('email')}
          />
          {errors.email && <p id="c-yup">{errors.email.message}</p>}
          <label htmlfor="phone" className="label-contact">
            N° Téléphone :
          </label>
          <input
            className="input-contact"
            type="text"
            id="phone"
            name="phone"
            placeholder="+12345678"
            {...register('phone')}
          />
          {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
          <label for="Sujet" className="label-contact">
            Sujet:
          </label>
          <select
            className="select-contact"
            name="subject"
            {...register('Subject')}
          >
            <option selected>Selectionner l'objet de la demande</option>
            <option value="devis">Devis</option>
            <option value="questions">Questions</option>
            <option value="Autre">Autre</option>
          </select>

          <label htmlfor="message" className="label-contact">
            {' '}
            Message :
          </label>
          <textarea
            className="message-contact"
            placeholder="Merci de renseigner vos questions ou commentaires"
            id="message"
            cols="20"
            rows="10"
            name="message"
            {...register('message')}
          ></textarea>
          {errors.message && <p id="c-yup">{errors.message.message}</p>}
          

          <button className="button-contact" type="Submit" value="Envoyer">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;