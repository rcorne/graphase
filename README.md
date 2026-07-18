# 📊 Graphase: Simulador Económico Pro

Un simulador económico interactivo de código abierto diseñado para estudiantes, profesores y entusiastas de la economía. Esta herramienta permite visualizar en tiempo real cómo los cambios en los parámetros micro y macroeconómicos afectan los mercados y el equilibrio de una economía.

A diferencia de los gráficos estáticos de los libros de texto, este simulador permite **hacer clic y arrastrar las curvas** para experimentar de primera mano los efectos de los shocks económicos y las políticas gubernamentales.

---

## ✨ Características Principales

*   **Interactividad Drag & Drop:** Arrastra las curvas de oferta, demanda, IS o LM directamente sobre el gráfico para ver cómo se ajustan los precios, las cantidades y las tasas de interés en tiempo real.
*   **Cálculo Instantáneo:** Resolución algebraica automática de sistemas de ecuaciones para encontrar puntos de equilibrio exactos.
*   **Interfaz Moderna (UI/UX):** Diseño limpio y responsivo estilo *dashboard*, con métricas clave destacadas mediante tarjetas de datos.
*   **Cero Latencia:** Animaciones optimizadas en `Chart.js` para garantizar que el movimiento de las curvas sea fluido.

---

## 📈 Módulos Incluidos

### 1. Módulo Microeconómico: Mercados y Bienestar
Simula un mercado de competencia perfecta y analiza los efectos de la intervención gubernamental.
*   **Oferta y Demanda:** Modifica la intersección y pendiente de ambas curvas.
*   **Intervención Fiscal:** Aplica un impuesto unitario y visualiza la divergencia entre el precio que paga el consumidor y el que recibe el productor.
*   **Análisis de Bienestar:** Cálculo automático del Excedente del Consumidor, Excedente del Productor, Recaudación Fiscal y la Pérdida de Peso Muerto (Área de Ineficiencia).

### 2. Módulo Macroeconómico: Modelo IS-LM
Explora el equilibrio general a corto plazo cruzando el mercado de bienes y el mercado de dinero.
*   **Mercado de Bienes (IS):** Ajusta el consumo autónomo, la propensión marginal al consumo, la sensibilidad de la inversión a la tasa de interés, el gasto público ($G$) y los impuestos ($T$).
*   **Mercado de Dinero (LM):** Manipula la oferta monetaria ($M$), el nivel de precios ($P$) y la sensibilidad de la demanda de dinero a la renta y a la tasa de interés.
*   **Simulación de Políticas:** Visualiza el efecto desplazamiento (*crowding out*) de la política fiscal y la eficacia de la política monetaria expansiva o restrictiva.

---

## 🚀 Instalación y Uso

Este proyecto es extremadamente ligero y no requiere bases de datos, servidores ni procesos de compilación (Node.js/NPM). Se ejecuta 100% del lado del cliente.

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/TU-USUARIO/simulador-economico.git](https://github.com/TU-USUARIO/simulador-economico.git)
    ```
2.  **Abre el proyecto:**
    Simplemente haz doble clic en el archivo `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).

*También puedes probar la versión en vivo alojada en GitHub Pages:*  
👉 **[Ver Demo en Vivo](https://TU-USUARIO.github.io/simulador-economico/)** *(Nota: Actualiza este enlace una vez que actives GitHub Pages)*.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5 & CSS3:** Estructura semántica y diseño moderno mediante CSS Grid y Flexbox.
*   **Vanilla JavaScript (ES6):** Lógica matemática y manipulación del DOM sin frameworks pesados.
*   **Chart.js:** Librería de renderizado de gráficos HTML5 Canvas para la visualización de datos y curvas.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas agregar nuevos modelos (como la Frontera de Posibilidades de Producción, Curvas de Indiferencia, o la Curva de Phillips), siéntete libre de hacer un *fork* del repositorio y enviar un *Pull Request*.

1. Haz un Fork del proyecto.
2. Crea una rama para tu función (`git checkout -b feature/NuevoModelo`).
3. Confirma tus cambios (`git commit -m 'Añadir nuevo modelo macro'`).
4. Haz push a la rama (`git push origin feature/NuevoModelo`).
5. Abre un Pull Request.

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - siéntete libre de usarlo, modificarlo y distribuirlo para fines educativos o personales.
