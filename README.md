# typescriptでのグラフ表示練習

## 起動方法
コマンドで  
docker compose up --build  

url  
http://localhost:5173  

## 学んだこと
npm install char.js  これでchart.jsを先にローカルに入れておくと最初の環境構築が楽  
ChartData の型を拝借するとめっちゃ楽に型を使える  
const chartData: ChartData<"pie">的な感じで一気にできる  