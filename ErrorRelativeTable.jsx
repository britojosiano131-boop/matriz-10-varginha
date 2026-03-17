import React from 'react';

const ErrorRelativeTable = () => {
  const data = [
    { label: 'Frequência de Operação', value: '333 Hz' },
    { label: 'Potência Calculada', value: '1.104,73 kW' },
    { label: 'Convergência Matriz 10', value: '99,858%' },
    { label: 'Erro Relativo (Vacuum Latency)', value: '0,142%' },
    { label: 'Estabilização de Massa', value: '12.500 kg (Brito V1)' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', backgroundColor: '#f4f4f4', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h2 style={{ borderBottom: '2px solid #0056b3', color: '#0056b3' }}>Dossiê Unificado - Unidade Varginha</h2>
      <table style={{ width: '100%', textAlign: 'left', marginTop: '10px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Parâmetro Técnico</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Valor Validado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.label}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#555', fontStyle: 'italic' }}>
        Status: Pronto para integração | Data: 17 de março de 2026
      </div>
    </div>
  );
};

export default ErrorRelativeTable;
                 
