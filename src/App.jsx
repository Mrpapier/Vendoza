import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('Accueil');

  const menu = ['Accueil', 'Commandes', 'Produits', 'Clients', 'Stocks', 'Paramètres'];

  return (
    <div style={{fontFamily:'Arial',background:'#f3f5f9',minHeight:'100vh',color:'#172033'}}>
      <header style={{background:'#101827',color:'white',padding:20}}>
        <h2>VENDOZA</h2>
        <p>Votre gestion commerciale simplifiée</p>
      </header>

      <nav style={{display:'flex',gap:8,overflowX:'auto',padding:12,background:'white'}}>
        {menu.map(item => (
          <button key={item} onClick={() => setPage(item)}
            style={{padding:12,border:0,borderRadius:8,background:page===item?'#2563eb':'#e8edf5',color:page===item?'white':'#172033'}}>
            {item}
          </button>
        ))}
      </nav>

      <main style={{padding:20}}>
        <h2>{page}</h2>

        {page === 'Accueil' && (
          <div>
            <p>Bienvenue sur votre espace de gestion.</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:12}}>
              {['Chiffre d’affaires','Nombre de ventes','Panier moyen','Commandes livrées'].map(x => (
                <div key={x} style={{background:'white',padding:18,borderRadius:12}}>
                  <strong>{x}</strong>
                  <h2>0</h2>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'Commandes' && <p>Gestion de vos commandes.</p>}
        {page === 'Produits' && <p>Gestion de vos produits.</p>}
        {page === 'Clients' && <p>Gestion de vos clients.</p>}
        {page === 'Stocks' && <p>Suivi de vos stocks.</p>}
        {page === 'Paramètres' && <p>Informations de votre commerce et paramètres.</p>}
      </main>
    </div>
  );
}
