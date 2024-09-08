import React, { useState, useEffect } from 'react';

const Step1 = ({ formData, setFormData, errors, handleNext }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Appeler l'API des pays au chargement du composant
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Trier les pays par nom
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        // Filtrer pour exclure un pays spécifique (ex: exclure "Israel")
        const filteredCountries = sortedCountries.filter(country => country.name.common !== "Israel");
        setCountries(filteredCountries);
      })
      .catch(error => console.error('Erreur lors de la récupération des pays:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="step-form px-5">
      <div className="form-group-row">
        <input type="text" name="nom" placeholder="Nom*" value={formData.nom} onChange={handleChange} required />
        <input type="text" name="prenom" placeholder="Prénom*" value={formData.prenom} onChange={handleChange} required />
      </div>
      <div className="form-group-row">
        <input type="date" name="dateNaissance" placeholder="Date de naissance*" value={formData.dateNaissance} onChange={handleChange} required />
        <select name="sexe" value={formData.sexe} onChange={handleChange} required>
          <option value="">Sexe*</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </select>
      </div>
      <div className="form-group-col">
        <select name="pays" value={formData.pays} onChange={handleChange} required>
          <option value="">Sélectionner un pays*</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
        <input type="text" name="adresse" placeholder="Adresse résidentielle*" value={formData.adresse} onChange={handleChange} required />
        <input type="tel" name="phoneNumber" placeholder="Numéro de téléphone" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div className="form-footer">
        <span className="login-link">Avez-vous déjà un compte ?</span>
        <button type="button" className="icon-button" onClick={handleNext}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Step1;
