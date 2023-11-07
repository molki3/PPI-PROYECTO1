import './App.css'
import Calculator from './components/Calculator'

function App() {

  return (
    <div className="min-h-screen rounded-3xl flex items-center justify-center bg-gradient-to-r from-green-700 to-blue-700">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Sistema de Reconocimiento de Placas</h1>
        <p className="text-xl mb-6">Bienvenido al sistema que reconoce placas de vehículos.</p>
        <a href="http://127.0.0.1:8000/"><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Probar</button></a>
      </div>
    </div>
  )
}

export default App
