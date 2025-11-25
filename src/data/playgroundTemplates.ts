export const RESUME_CARD_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Outfit', sans-serif;
            background: linear-gradient(196deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            overflow: hidden;
        }
        
        .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 3rem;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            max-width: 380px;
            width: 90%;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%);
            animation: rotate 20s linear infinite;
            pointer-events: none;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .avatar {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #6366f1, #a855f7);
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            border: 4px solid rgba(255,255,255,0.3);
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }
        
        h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, #fff, #a5b4fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            z-index: 1;
        }
        
        .role {
            color: #e2e8f0;
            font-weight: 500;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.8rem;
            position: relative;
            z-index: 1;
        }
        
        p {
            color: #cbd5e1;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-weight: 300;
            position: relative;
            z-index: 1;
        }
        
        .btn {
            display: inline-block;
            padding: 0.8rem 2rem;
            background: white;
            color: #1a1c2c;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: transform 0.2s, box-shadow 0.2s;
            position: relative;
            z-index: 1;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="avatar">RD</div>
        <h1>Rajat Dash</h1>
        <div class="role">Frontend Engineer</div>
        <p>Specializing in React.js, TypeScript, and scalable UI architectures. Passionate about crafting seamless digital experiences and optimizing performance.</p>
    </div>
</body>
</html>
`.trim();
