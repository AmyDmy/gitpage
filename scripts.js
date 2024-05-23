// document.addEventListener('DOMContentLoaded', () => {
//     const balls = document.querySelectorAll('.ball');
//     const tooltip = document.getElementById('tooltip');
//     const line = document.getElementById('line');

//     balls.forEach(ball => {
//         ball.addEventListener('mouseenter', (e) => {
//             const text = e.target.getAttribute('data-text');
//             const color = e.target.getAttribute('data-color');
//             const ballRect = e.target.getBoundingClientRect();
//             const containerRect = document.querySelector('.orbit-container').getBoundingClientRect();

//             const ballCenterX = ballRect.left + ballRect.width / 2;
//             const ballCenterY = ballRect.top + ballRect.height / 2;
//             let tooltipX, tooltipY;

//             if (e.target.classList.contains('ball1')) {
//                 // 红色小球，指示线朝右
//                 tooltipX = ballCenterX + 150;
//                 tooltipY = ballCenterY - 20;
//             } else if (e.target.classList.contains('ball2')) {
//                 // 绿色小球，指示线朝上
//                 tooltipX = ballCenterX - 50;
//                 tooltipY = ballCenterY - 120;
//             } else if (e.target.classList.contains('ball3')) {
//                 // 蓝色小球，指示线朝左
//                 tooltipX = ballCenterX - 120;
//                 tooltipY = ballCenterY - 20;
//             } else if (e.target.classList.contains('ball4')) {
//                 // 黄色小球，指示线朝下
//                 tooltipX = ballCenterX - 50;
//                 tooltipY = ballCenterY + 120;
//             }

//             tooltip.textContent = text;
//             tooltip.style.backgroundColor = color;
//             tooltip.style.opacity = 1;
//             tooltip.style.transform = 'translate(-50%, -50%) scale(1)';
//             tooltip.style.left = `${tooltipX}px`;
//             tooltip.style.top = `${tooltipY}px`;

//             const svg = document.getElementById('svg-line');
//             const svgRect = svg.getBoundingClientRect();
//             const startX = ballCenterX - svgRect.left;
//             const startY = ballCenterY - svgRect.top;
//             const endX = tooltipX - svgRect.left;
//             const endY = tooltipY - svgRect.top;

//             // 绘制指示线，确保它不会遮挡文字框的内容
//             let path;
//             if (e.target.classList.contains('ball1')) {
//                 // 红色小球，指示线朝右
//                 path = `M ${startX} ${startY} L ${endX - 10} ${endY}`;
//             } else if (e.target.classList.contains('ball2')) {
//                 // 绿色小球，指示线朝上
//                 path = `M ${startX} ${startY} L ${endX} ${endY + 10}`;
//             } else if (e.target.classList.contains('ball3')) {
//                 // 蓝色小球，指示线朝左
//                 path = `M ${startX} ${startY} L ${endX + 10} ${endY}`;
//             } else if (e.target.classList.contains('ball4')) {
//                 // 黄色小球，指示线朝下
//                 path = `M ${startX} ${startY} L ${endX} ${endY - 10}`;
//             }

//             line.setAttribute('d', path);
//             line.setAttribute('stroke', color);
//             line.style.display = 'block';
//         });

//         ball.addEventListener('mouseleave', () => {
//             tooltip.style.opacity = 0;
//             tooltip.style.transform = 'translate(-50%, -50%) scale(0)';
//             line.style.display = 'none';
//         });
//     });
// });
