const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


        class Snake {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
        }

        const SnakeParts = [];
        let tailLenght = 2;

        let speed = 7;

        let tileCount = 20;
        let tileSize = canvas.width / tileCount - 2;

        let headX = 10;
        let headY = 10;

        let velocityX = 0;
        let velocityY = 0;

        let appleX = 5;
        let appleY = 5;

        let pause = false;
        let score = 0;

        let lastMovement = 0;

        function draw() {

            if (!pause) {
                changePosition();
                if (gameOver()) {
                    drawGameOver();
                    return;
                } else {
                    clearScreen();
                    changeApplePos();
                    drawApple();
                    drawSnake();
                    scores();
                    console.log(pause);
                    setTimeout(draw, 1000 / speed);
                }
            } else setTimeout(draw, 1000 / speed);

        }


        function gameOver() {

            if (headX < 0 || headX === tileCount || headY < 0 || headY === tileCount) return true;

            for (let i = 2; i < SnakeParts.length; i++)
                if (headX == SnakeParts[i].x && headY == SnakeParts[i].y) return true;

            return false;
        }

        function drawGameOver() {
            ctx.fillStyle = "blue"
            ctx.font = "30px Verdana"
            ctx.fillText("GAME OVER", canvas.width / 4, canvas.height / 2);
        }

        function clearScreen() {
            ctx.fillStyle = 'black' //color del fons
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function drawSnake() {

            ctx.fillStyle = 'blue';
            for (let i = 0; i < SnakeParts.length; i++) {
                let part = SnakeParts[i];
                ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
            }

            SnakeParts.push(new Snake(headX, headY));
            if (SnakeParts.length > tailLenght) SnakeParts.shift();

            ctx.fillStyle = 'green';
            ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

        }

        function drawApple() {
            ctx.fillStyle = 'red';
            ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
        }

        function changeApplePos() {

            if (headX == appleX && headY == appleY) {
                appleX = Math.floor(Math.random() * tileCount);
                appleY = Math.floor(Math.random() * tileCount);
                tailLenght++;
                score++;
            }
        }

        function changePosition() {
            headX = headX + velocityX;
            headY = headY + velocityY;
        }

        function scores() {
            ctx.fillStyle = "white"
            ctx.font = "10px Verdana"
            ctx.fillText("Score : " + score, canvas.width - 50, 10);
        }

        function movementAllowed(newMovement) {
            if ((lastMovement === 37 || lastMovement === 65) && (newMovement === 39 || newMovement === 68)) return false;
            else if ((lastMovement === 38 || lastMovement === 87) && (newMovement === 83 || newMovement === 40)) return false;
            else if ((lastMovement === 39 || lastMovement === 68) && (newMovement === 37 || newMovement === 65)) return false;
            else {
                if ((lastMovement === 40 || lastMovement === 83) && (newMovement === 38 || newMovement === 87)) return false;
                else return true;
            }
        }

        document.addEventListener('keydown', function (e) {

            if (movementAllowed(e.keyCode)) {
                lastMovement = e.keyCode;
                switch (e.keyCode) {
                    case 37:
                    case 65:
                        velocityX = -1;
                        velocityY = 0;
                        break;
                    case 38:
                    case 87:
                        velocityX = 0;
                        velocityY = -1;
                        break;
                    case 39:
                    case 68:
                        velocityX = 1;
                        velocityY = 0;
                        break;
                    case 40:
                    case 83:
                        velocityX = 0;
                        velocityY = 1;
                        break;
                    case 32:
                        if (pause) pause = false;
                        else pause = true;
                }
            }
        });
        draw();


