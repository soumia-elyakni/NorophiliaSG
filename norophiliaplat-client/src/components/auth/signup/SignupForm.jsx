import React, { useState } from 'react';
import './Signup.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    sexe: '',
    pays: '',
    adresse: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);

  const validateStep1 = () => {
    const newErrors = {};
    ['nom', 'prenom', 'dateNaissance', 'sexe', 'pays', 'adresse'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Ce champ est requis';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email requis';
    }
    if (!formData.password) {
      newErrors.password = 'Mot de passe requis';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(prevStep => prevStep + 1);
    } else if (step === 2 && validateStep2()) {
      // On successful validation of Step 2, we can submit the form or proceed to Step 3.
      setStep(prevStep => prevStep + 1);
      // Ici, vous pouvez également gérer la soumission du formulaire.
    } else {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 300000); // Masquer l'alerte après 3 secondes
    }
  };

  const handlePrev = () => {
    setStep(prevStep => prevStep - 1);
  };

  return (
    <div className="py-7 px-4">
      {alertVisible && <div className="alert">
        <button className="close-btn" onClick={() => setAlertVisible(false)}>×</button>
        <p>Veuillez remplir tous les champs requis (*) avant de continuer.</p>
      </div>}
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} errors={errors} handleNext={handleNext} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} errors={errors} handleNext={handleNext} handlePrev={handlePrev} />}
      {step === 3 && <Step3 />}
    </div>
  );
};

export default SignupForm;
