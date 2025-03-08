window.onload = function() {
    console.log("pet.js 載入");

    const walkFramesRight = [
        "https://i.imgur.com/dkFdp3O.png",
        "https://i.imgur.com/RXiHdt1.png",
        "https://i.imgur.com/c8Rc3UG.png",
        "https://i.imgur.com/MbbGCoL.png",
        "https://i.imgur.com/pFg2GvV.png",
        "https://i.imgur.com/MXysqBZ.png",
        "https://i.imgur.com/MA4qDQN.png",
        "https://i.imgur.com/yVJ93OX.png"
    ];

    const walkFramesLeft = [
        "https://i.imgur.com/eea1QXT.png",
        "https://i.imgur.com/4rXwgzg.png",
        "https://i.imgur.com/EVn2q2z.png",
        "https://i.imgur.com/6x6ZCh5.png",
        "https://i.imgur.com/jKYUlNe.png",
        "https://i.imgur.com/vfLAGwc.png",
        "https://i.imgur.com/mHW9Re4.png",
        "https://i.imgur.com/GLXFDi3.png"
    ];

    const stopFramesRight = [
        "https://i.imgur.com/rtVrf8W.png",
        "https://i.imgur.com/XzLSljd.png",
        "https://i.imgur.com/5zqu1QC.png",
        "https://i.imgur.com/lPg44w8.png",
        "https://i.imgur.com/VEnYKtt.png",
        "https://i.imgur.com/oV4cNUl.png",
        "https://i.imgur.com/bCpaJ6s.png",
        "https://i.imgur.com/4slXCRf.png"
    ];

    const stopFramesLeft = [
        "https://i.imgur.com/buDuuss.png",
        "https://i.imgur.com/WoomMSv.png",
        "https://i.imgur.com/Cc799BE.png",
        "https://i.imgur.com/SW5aLj4.png",
        "https://i.imgur.com/nSvPW0n.png",
        "https://i.imgur.com/zVVvmMK.png",
        "https://i.imgur.com/LH61Q3s.png",
        "https://i.imgur.com/r8ImNLj.png"
    ];

    const hitFramesRight = [
        "https://i.imgur.com/hlufAUa.png",
        "https://i.imgur.com/3yqiRSu.png",
        "https://i.imgur.com/0Ki1Iir.png",
	"https://i.imgur.com/oU8JnQg.png"
    ];

    const hitFramesLeft = [
        "https://i.imgur.com/eMOuSjq.png",
        "https://i.imgur.com/V3bejqR.png",
        "https://i.imgur.com/q1X8XGi.png",
	"https://i.imgur.com/mbF70ed.png"
	
    ];
    const knockedDownFramesRight = [
        "https://i.imgur.com/5jv9xk2.png",
        "https://i.imgur.com/ea11paK.png",
        "https://i.imgur.com/NXVqa6n.png",
	"https://i.imgur.com/EDv1FcS.png",
	"https://i.imgur.com/EZWUx3D.png",
	"https://i.imgur.com/QQmehSX.png",
	"https://i.imgur.com/XEapxjl.png",
	"https://i.imgur.com/w9OuD1q.png",
	"https://i.imgur.com/BMpC0mx.png",
	"https://i.imgur.com/ukOYmGC.png"
    ];
    const knockedDownFramesLeft = [
        "https://i.imgur.com/qtpoGMm.png",
        "https://i.imgur.com/vRJJUgT.png",
        "https://i.imgur.com/qfZeubP.png",
	"https://i.imgur.com/yjTlpDT.png",
	"https://i.imgur.com/GhvoWjt.png",
	"https://i.imgur.com/OCeKQZi.png",
	"https://i.imgur.com/l2rQdCI.png",
	"https://i.imgur.com/TaNSUJ7.png",
	"https://i.imgur.com/aILInox.png",
	"https://i.imgur.com/vfsdCtv.png"
    ];
    
    const swordFramesRight = [
        "https://i.imgur.com/X0OZLaj.png",
        "https://i.imgur.com/Sbcqer9.png",
	"https://i.imgur.com/0dUtxOG.png",
	"https://i.imgur.com/oCPCqvt.png",
	"https://i.imgur.com/kbJZxAc.png",
	"https://i.imgur.com/zYLKXd6.png",
	"https://i.imgur.com/yurUHkz.png",
	"https://i.imgur.com/Y3gxwgv.png",
	"https://i.imgur.com/BFzqYLU.png",
	"https://i.imgur.com/witzpYY.png",
	"https://i.imgur.com/ztEIbPq.png",
	"https://i.imgur.com/dEM8zw8.png",
	"https://i.imgur.com/Us70glS.png",
	"https://i.imgur.com/vbZbSsd.png",
	"https://i.imgur.com/mU38koA.png"
    ];

    const swordFramesLeft = [
        "https://i.imgur.com/js6MG8t.png",
        "https://i.imgur.com/J9ZqINY.png",
	"https://i.imgur.com/YUjrmSk.png",
	"https://i.imgur.com/0IwNWVK.png",
	"https://i.imgur.com/UhWnrvk.png",
	"https://i.imgur.com/CUokNa3.png",
	"https://i.imgur.com/WnCuiUG.png",
	"https://i.imgur.com/6WzjiuO.png",
	"https://i.imgur.com/EOLggqm.png",
	"https://i.imgur.com/mVrCmVw.png",
	"https://i.imgur.com/Pq0OLmq.png",
	"https://i.imgur.com/zMB3Kvj.png",
	"https://i.imgur.com/QAFFAuf.png",
	"https://i.imgur.com/eudj28n.png",
	"https://i.imgur.com/MFjvz4B.png",
	"https://i.imgur.com/c94IoXR.png",
	"https://i.imgur.com/8POySAq.png"
    ];

    const punchFramesRight = [
        "https://i.imgur.com/Jx8gTp6.png",
        "https://i.imgur.com/O0QDKDG.png",
	"https://i.imgur.com/LeDQOyT.png",
	"https://i.imgur.com/KFqPIGP.png",
	"https://i.imgur.com/g6giGmT.png",
	"https://i.imgur.com/P4aex0q.png",
	"https://i.imgur.com/okoMl8c.png",
	"https://i.imgur.com/Hs7rf0X.png",
	"https://i.imgur.com/pVsayX3.png",
	"https://i.imgur.com/cyIlQzs.png",
	"https://i.imgur.com/Z6PCAxO.png",
	"https://i.imgur.com/45eQmEM.png",
	"https://i.imgur.com/EgfjLkU.png",
	"https://i.imgur.com/smoZj3B.png",
	"https://i.imgur.com/6itvc2N.png",
	"https://i.imgur.com/nygmjtz.png",
	"https://i.imgur.com/qHsyt7b.png",
	"https://i.imgur.com/L9s78Lx.png",
	"https://i.imgur.com/UNM058K.png"
    ];

    const punchFramesLeft = [
        "https://i.imgur.com/FoABom4.png",
        "https://i.imgur.com/XlKJQIM.png",
	"https://i.imgur.com/AuTvFzs.png",
	"https://i.imgur.com/jX1dBOq.png",
	"https://i.imgur.com/nlLsfKj.png",
	"https://i.imgur.com/q3198uu.png",
	"https://i.imgur.com/qhr1i9y.png",
	"https://i.imgur.com/bmfpNil.png",
	"https://i.imgur.com/RmEy7wU.png",
	"https://i.imgur.com/mbZESSq.png",
	"https://i.imgur.com/FzgC4lZ.png",
	"https://i.imgur.com/Z4lM3Wg.png",
	"https://i.imgur.com/dDBdenG.png",
	"https://i.imgur.com/8XfZIHf.png",
	"https://i.imgur.com/QtQY1iT.png",
	"https://i.imgur.com/FqXQ84S.png",
	"https://i.imgur.com/YGCMMEQ.png",
	"https://i.imgur.com/cd4t48Q.png",
	"https://i.imgur.com/kvJP1XS.png",
    ];

    let clickCount = 0;
    let frameIndex = 0;
    let stopFrameIndex = 0;
    let stopInterval = null;
    let isStopping = false;
    let moveMode = 0; 
    let hitFrameIndex = 0; 
    let hitTimer = null;
    let knockedDownFrameIndex = 0; 
    let knockedDownInterval = null; 
    let mouseX = 0; 
    let mouseY = 0; 
    let actionFrameIndex = 0;
    let actionInterval = null;
    let isActionPlaying = false;
    let distance = 0
    let wasMoving = false;
    

    const pet = document.createElement("img");
    pet.src = walkFramesRight[0];

    pet.style.position = "absolute";
    pet.style.width = "80px";
    pet.style.zIndex = "9999";

    pet.style.top = `${window.scrollY + 100}px`;
    pet.style.left = "100px";

    document.body.appendChild(pet);

    let x = 100, y = window.scrollY + 100, speed = 2;
    let direction = 1, directionY = 1;
    let isMoving = true;

    function triggerAction(actionFrames) {
        if (isActionPlaying) return;
        isActionPlaying = true;
        actionFrameIndex = 0;
        pet.src = actionFrames[actionFrameIndex];

        let startTime = null;
        const duration = 110 * actionFrames.length; 

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            let frame = Math.floor(progress / 100);

            if (frame < actionFrames.length) {
                actionFrameIndex = frame; 
                pet.src = actionFrames[actionFrameIndex];
                requestAnimationFrame(animate); 
            } else {
                finishAction();
            }
        }

        function finishAction() {
            isActionPlaying = false;
            // 恢復火柴人的狀態
            if (distance > 50) {
                const frames = direction === 1 ? stopFramesRight : stopFramesLeft;
                pet.src = frames[frameIndex];
                frameIndex = (frameIndex + 1) % frames.length;
            } else {
                const frames = direction === 1 ? stopFramesRight : stopFramesLeft;
                pet.src = frames[frameIndex];
                frameIndex = (frameIndex + 1) % frames.length;
            }
            movePet();
        }

        requestAnimationFrame(animate);

        setTimeout(finishAction, duration);
    }

     function handleMouseClick(event) {
    console.log("滑鼠點擊事件觸發");

    const petRect = pet.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    console.log("petRect:", petRect);
    console.log("mouseX:", mouseX, "mouseY:", mouseY);

    if (mouseX >= petRect.left && mouseX <= petRect.right &&
        mouseY >= petRect.top && mouseY <= petRect.bottom) {
        console.log("火柴人被點擊了！");

        clickCount++; 

        if (clickCount >= 3) {
            isMoving = false;
            knockedDownFrameIndex = 0;
            const knockedDownFrames = direction === 1 ? knockedDownFramesRight : knockedDownFramesLeft;
            pet.src = knockedDownFrames[knockedDownFrameIndex];

            if (knockedDownInterval !== null) {
                clearInterval(knockedDownInterval);
                knockedDownInterval = null;
            }

            knockedDownInterval = setInterval(() => {
                knockedDownFrameIndex++;
                console.log("knockedDownFrameIndex:", knockedDownFrameIndex); 出
                if (knockedDownFrameIndex >= knockedDownFrames.length) {
                    knockedDownFrameIndex = 0;
                }
                pet.src = knockedDownFrames[knockedDownFrameIndex];
            }, 200);

            if (hitTimer !== null) {
                clearTimeout(hitTimer);
            }
            hitTimer = setTimeout(() => {
                hitTimer = null;
                clickCount = 0;
                isMoving = true;
                clearInterval(knockedDownInterval);
                knockedDownInterval = null;
                movePet();
            }, 2000);
        } else {
            isMoving = false;
            console.log("direction:", direction);
            console.log("hitFrameIndex:", hitFrameIndex);
            const hitFrames = direction === 1 ? hitFramesRight : hitFramesLeft;
            console.log("hitFrames:", hitFrames);
            pet.src = hitFrames[hitFrameIndex];
            console.log("pet.src:", pet.src);
            hitFrameIndex = (hitFrameIndex + 1) % hitFrames.length;

            if (hitTimer !== null) {
                clearTimeout(hitTimer);
            }
            hitTimer = setTimeout(() => {
                hitTimer = null;
                isMoving = true;
                movePet();
            }, 1000);
        }
        console.log("hitTimer:", hitTimer);
    }
}


    document.addEventListener('click', handleMouseClick);
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });


    function movePet() {
        if (isMoving && !isActionPlaying) {
            const petRect = pet.getBoundingClientRect();
            const petCenterX = petRect.left + petRect.width / 2;
            const petCenterY = petRect.top + petRect.height / 2;

            const deltaX = mouseX - petCenterX;
            const deltaY = mouseY - petCenterY;

            distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance > 100) {
                wasMoving = true;
                const moveSpeed = 5;
                const moveX = (deltaX / distance) * moveSpeed;
                const moveY = (deltaY / distance) * moveSpeed;

                x += moveX;
                y += moveY;

                pet.style.left = `${x}px`;
                pet.style.top = `${y}px`;

                if (moveX > 0) {
                    direction = 1;
                } else {
                    direction = -1;
                }

                const frames = direction === 1 ? walkFramesRight : walkFramesLeft;
                pet.src = frames[frameIndex];
                frameIndex = (frameIndex + 1) % frames.length;
            } else {
                wasMoving = false;
                const frames = direction === 1 ? stopFramesRight : stopFramesLeft;
                pet.src = frames[frameIndex];
                frameIndex = (frameIndex + 1) % frames.length;
            }

            if (Math.random() < 0.001) {
                const action = Math.random() < 0.5 ? "sword" : "punch";
                const actionFrames = direction === 1 ?
                    (action === "sword" ? swordFramesRight : punchFramesRight) :
                    (action === "sword" ? swordFramesLeft : punchFramesLeft);
                triggerAction(actionFrames);
            }

            checkBounds();
            requestAnimationFrame(movePet);
        }
    }


    movePet();

    let lastScrollY = window.scrollY;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        if (currentScrollY !== lastScrollY) {
            y += (currentScrollY - lastScrollY);
            pet.style.top = `${y}px`;
            lastScrollY = currentScrollY;
        }
        requestAnimationFrame(handleScroll);
    }

    handleScroll();

    function checkBounds() {
        const petRect = pet.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (petRect.left < 0) {
            pet.style.left = "0px";
        } else if (petRect.right > windowWidth) {
            pet.style.left = `${windowWidth - pet.offsetWidth}px`;
        }

        if (petRect.top < window.scrollY) {
            y = window.scrollY;
            pet.style.top = `${y}px`;
        } else if (petRect.bottom > window.scrollY + windowHeight) {
            y = window.scrollY + windowHeight - pet.offsetHeight;
            pet.style.top = `${y}px`;
        }
    }

    window.addEventListener('resize', checkBounds);
};
