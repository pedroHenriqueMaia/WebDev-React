import { useState } from "react";


function ValorSoma({a, b}) {
  const [values, setValues] = useState({a, b})
  const resultado = values.a + values.b;

  function onChange(ev){
      setValues({
          ...values,
          [ev.target.name]: Number(ev.target.value)
      });
  }
    
  return (
      <div className="container">
          <h1>Area de Soma</h1>
          <form>
            <div className="form-group">
                <input type="text" className="form-control" name="a" values={values.a} onChange={onChange} placeholder="Primerio numero" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="b"  values={values.b} onChange={onChange} placeholder="Segundo numero" />
            </div>
            <div className="alert alert-info">
                <p>A soma de {values.a} + {values.b} = {resultado}</p>
            </div>
            </form>
      </div>
  );
}

export default ValorSoma;
