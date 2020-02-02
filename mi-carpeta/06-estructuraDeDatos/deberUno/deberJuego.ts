function restart() {
	var i,j,x;
	score[0]=0;
	score[1]=0;
	for (i=0;i<=m;i++) {
		x=2*i*nn+1
		for (j=0;j<n;j++) {
			hedge[i][j]=0;
		}
	}
	for (i=0;i<m;i++) {
		x=(2*i+1)*nn
		for (j=0;j<=n;j++) {
			vedge[i][j]=0;
		}
	}
	for (i=0;i<m;i++) {
		x=(2*i+1)*nn+1
		for (j=0;j<n;j++) {
			box[i][j]=0;
		}
	}
	if (player!=1) makemove();
}

function hmove(i,j) {     // Movimiento horizontal del usuario
	if (hedge[i][j]<1) {
		sethedge(i,j);
		if (score[0]+score[1]==m*n) {
			alert("Game over.\r Score: Red = "+score[0]+",  Blue = "+score[1])
		} else if (player==0) makemove();
	}
}

function vmove(i,j) {     // Movimiento vertical del usuario
	if (vedge[i][j]<1) {
		setvedge(i,j);
		if (score[0]+score[1]==m*n) {
			alert("Game over.\r Score: Red = "+score[0]+",  Blue = "+score[1])
		} else if (player==0) makemove();
	}
}

function sethedge(x,y) {      // Establecer el borde horizontal
	hedge[x][y]=1;
	if (x>0) box[x-1][y]++;
	if (x<m) box[x][y]++;
	checkh(x,y)
	player=1-player;
}

function setvedge(x,y) {      // Establecer el borde vertical 
 	vedge[x][y]=1;
	if (y>0) box[x][y-1]++;
	if (y<n) box[x][y]++;
	checkv(x,y)
	player=1-player;
}

function takeedge(zz,x,y) {    // Establecer el borde horizontal si es zz = 1 y y el borde vertical si zz = 2
	if (zz>1) setvedge(x,y);
	else sethedge(x,y);
}

function makemove() {
	takesafe3s();
	if (sides3()) {
		if (sides01()) {
			takeall3s();
			takeedge(zz,x,y);
		} else {
			sac(u,v)
		}	
		if (score[0]+score[1]==m*n) {
			alert("Game over.\r Score: Red = "+score[0]+",  Blue = "+score[1])
		}
	} else if (sides01()) takeedge(zz,x,y);
	else if (singleton()) takeedge(zz,x,y);
	else if (doubleton()) takeedge(zz,x,y);
	else makeanymove();
}

function takesafe3s() {     //Cojer todos los simple y dobles 3´s
	for (var i=0;i<m;i++) {
		for (var j=0;j<n;j++) {
			if (box[i][j]==3) {
				if (vedge[i][j]<1) {
					if (j==0 || box[i][j-1]!=2) setvedge(i,j);
				} else if (hedge[i][j]<1) {
					if (i==0 || box[i-1][j]!=2) sethedge(i,j);
				} else if (vedge[i][j+1]<1) {
					if (j==n-1 || box[i][j+1]!=2) setvedge(i,j+1);
				} else {
					if (i==m-1 || box[i+1][j]!=2) sethedge(i+1,j);
				}
			}
		}
	}
}

function sides3() {     // Retorna verdad y u,v si hay un box(u, v)=3
	for (var i=0;i<m;i++) {
		for (var j=0;j<n;j++) {
			if (box[i][j]==3) {
				u=i;
				v=j;
				return true;
			}
		}
	}
	return false;
}

function takeall3s() {
	while (sides3()) takebox(u,v);
}

function sides01() {      // Retorna verdad y zz, x, y si hay un borde
	if (Math.random()<.5) zz=1; else zz=2;  // zz=1 si hay horizontal, zz=2 si hay vertical 
	var i=Math.floor(m*Math.random());
	var j=Math.floor(n*Math.random());
	if (zz==1) {
		if (randhedge(i,j)) return true;
		else {
			zz=2;
			if (randvedge(i,j)) return true;
		}
	} else {
		if (randvedge(i,j)) return true;
		else {
			zz=1;
			if (randhedge(i,j)) return true;
		}
	}
	return false;
}

function safehedge(i,j) {     // Retorna verdad si (i,j) si hay un forde horizontal
	if (hedge[i][j]<1) {
		if (i==0) {
			if (box[i][j]<2) return true
		} else if (i==m) {
			if (box[i-1][j]<2) return true
		}
		else if (box[i][j]<2 && box[i-1][j]<2) return true;
	}
	return false
}

function safevedge(i,j) {
	if (vedge[i][j]<1) {
		if (j==0) {
			if (box[i][j]<2) return true
		} else if (j==n) {
			if (box[i][j-1]<2) return true
		}
		else if (box[i][j]<2 && box[i][j-1]<2) return true;
	}
	return false
}

function randhedge(i,j) {
	x=i;
	y=j;
	do {
		if (safehedge(x,y)) return true;
		else {
			y++;
			if (y==n) {
				y=0;
				x++;
				if (x>m) x=0;
			}
		}
	} while (x!=i || y!=j);
	return false
}

function randvedge(i,j) {
	x=i;
	y=j;
	do {
		if (safevedge(x,y)) return true;
		else {
			y++;
			if (y>n) {
				y=0;
				x++;
				if (x==m) x=0;
			}
		}
	} while (x!=i || y!=j);
	return false
}
function singleton() {     // Retorna verdad y zz, x, y si hay forde(x,y) exactamente
	var numb;              // 1 cuadro de distancia
	for (var i=0;i<m;i++) {
		for (var j=0;j<n;j++) {
			if (box[i][j]==2) {
				numb=0;
				if (hedge[i][j]<1) {
					if (i<1 || box[i-1][j]<2) numb++;
				}
				zz=2;
				if (vedge[i][j]<1) {
					if (j<1 || box[i][j-1]<2) numb++;
					if (numb>1) {
						x=i;
						y=j;
						return true;
					}
				}
				if (vedge[i][j+1]<1) {
					if (j+1==n || box[i][j+1]<2) numb++;
					if (numb>1) {
						x=i;
						y=j+1;
						return true;
					}
				}
				zz=1;
				if (hedge[i+1][j]<1) {
					if (i+1==m || box[i+1][j]<2) numb++;
					if (numb>1) {
						x=i+1;
						y=j;
						return true;
					}
				}
			}
		}
	}
	return false;
}

function doubleton() {     // Retorna verdad y zz, x, y si existe un borde(x, y) 
	zz=2;                  // Exactamente 2 cuadros
	for (i=0;i<m;i++) {
		for (j=0;j<n-1;j++) {
			if (box[i][j]==2 && box[i][j+1]==2 && vedge[i][j+1]<1) {
				if (ldub(i,j) && rdub(i,j+1)) {
					x=i;
					y=j+1;
					return true;
				}
			}
		}
	}
	zz=1;
	for (j=0;j<n;j++) {
		for (i=0;i<m-1;i++) {
			if (box[i][j]==2 && box[i+1][j]==2 && hedge[i+1][j]<1) {
				if (udub(i,j) && ddub(i+1,j)) {
					x=i+1;
					y=j;
					return true;
				}
			}
		}
	}
	return false
}

function ldub(i,j) {      // Entrega box(i, j) = 2 y borde vertical (i, j+1)= 0, retorna verdad
	if (vedge[i][j]<1) {      // Si hay otro borde libre conduce a bos<2 
		if (j<1 || box[i][j-1]<2) return true; 
	} else if (hedge[i][j]<1) {
		if (i<1 || box[i-1][j]<2) return true;
	} else if (i==m-1|| box[i+1][j]<2) {
		return true
	}
	return false
}

function rdub(i,j) {
	if (vedge[i][j+1]<1) {
		if (j+1==n || box[i][j+1]<2) return true;
	} else if (hedge[i][j]<1) {
		if (i<1 || box[i-1][j]<2) return true;
	} else if (i+1==m || box[i+1][j]<2) {
		return true
	}
	return false
}
				
function udub(i,j) {
	if (hedge[i][j]<1) {
		if (i<1 || box[i-1][j]<2) return true;
	} else if (vedge[i][j]<1) {
		if (j<1 || box[i][j-1]<2) return true;
	} else if (j==n-1 || box[i][j+1]<2) {
		return true
	}
	return false
}

function ddub(i,j) {
	if (hedge[i+1][j]<1) {
		if (i==m-1 || box[i+1][j]<2) return true;
	} else if (vedge[i][j]<1) {
		if (j<1 || box[i][j-1]<2) return true;
	} else if (j==n-1 || box[i][j+1]<2) {
		return true
	}
	return false
}

function sac(i,j) {     // Sacrifica dos cuadrados si todavía hay 3
    count=0;
	loop=false;
	incount(0,i,j);
	if (!loop) takeallbut(i,j);
	if (count+score[0]+score[1]==m*n) {
		takeall3s()
	} else {
		if (loop) {
			count=count-2;
		}
		outcount(0,i,j);
		i=m;
		j=n
	}
}

function incount(k,i,j) {  // Ingrese en box[i][j] = 3 y k = 0
    count++;               // Retorna count = number en cadena de starting a i,j
	if (k!=1 && vedge[i][j]<1) {     // k=1,2,3,4 significa saltar a la izquierda, arriba, derecha, abajo.
		if (j>0) {
			if (box[i][j-1]>2) {
				count++;
				loop=true;
			} else if (box[i][j-1]>1) incount(3,i,j-1);
		}
	} else if (k!=2 && hedge[i][j]<1) {
		if (i>0) {
			if (box[i-1][j]>2) {
				count++;
				loop=true
			} else if (box[i-1][j]>1) incount(4,i-1,j);
		}
	} else if (k!=3 && vedge[i][j+1]<1) {
		if (j<n-1) {
			if (box[i][j+1]>2) {
				count++;
				loop=true
			} else if (box[i][j+1]>1) incount(1,i,j+1);
		}
	} else if (k!=4 && hedge[i+1][j]<1) {
		if (i<m-1) {
			if (box[i+1][j]>2) {
				count++;
				loop=true
			} else if (box[i+1][j]>1) incount(2,i+1,j);
		}
	}
}

function takeallbut(x,y) {
	while (sides3not(x,y)) {
		takebox(u,v);
	}
}
	
function sides3not(x,y) {
	for (var i=0;i<m;i++) {
		for (var j=0;j<n;j++) {
			if (box[i][j]==3) {
				if (i!=x || j!=y) {
					u=i;
					v=j;
					return true;
				}
			}
		}
	}
	return false
}

function takebox(i,j) {
	if (hedge[i][j]<1) sethedge(i,j);
	else if (vedge[i][j]<1) setvedge(i,j);
	else if (hedge[i+1][j]<1) sethedge(i+1,j);
	else setvedge(i,j+1);
}

function outcount(k,i,j) {     // Toma todos menos un contador con 2 cuadros y sale
	if (count>0) {
		if (k!=1 && vedge[i][j]<1) {
			if (count!=2) setvedge(i,j);
			count--;
			outcount(3,i,j-1)
		} else if (k!=2 && hedge[i][j]<1) {
			if (count!=2) sethedge(i,j);
			count--;
			outcount(4,i-1,j)
		} else if (k!=3 && vedge[i][j+1]<1) {
			if (count!=2) setvedge(i,j+1);
			count--;
			outcount(1,i,j+1)
		} else if (k!=4 && hedge[i+1][j]<1) {
			if (count!=2) sethedge(i+1,j);
			count--;
			outcount(2,i+1,j)
		}
	}
}

function makeanymove() {
	x=-1;
	for (i=0;i<=m;i++) {
		for (j=0;j<n;j++) {
			if (hedge[i][j]<1) {
				x=i;
				y=j;
				i=m+1;
				j=n
			}
		}
	}
	if (x<0) {
		for (i=0;i<m;i++) {
			for (j=0;j<=n;j++) {
				if (vedge[i][j]<1) {
					x=i;
					y=j;
					i=m;
					j=n+1;
				}
			}
		}
		setvedge(x,y);
	} else {
		sethedge(x,y);
	}
	if (player==0) makemove();
}

function checkh(x,y) {     // Comprobar si el movimiento de cobertura obtiene algún punto
	var hit=0;
	if (x>0) {
		if (box[x-1][y]==4) {
			var uu=x-1;
			score[player]++;
			hit=1;
		}
	}
	if (x<m) {
		if (box[x][y]==4) {
			score[player]++;
			hit=1;
		}
	}
	if (hit>0) player=1-player;
}

function checkv(x,y) {
	var hit=0;
	if (y>0) {
		if (box[x][y-1]==4) {
			var vv=y-1;
			score[player]++;
			hit=1;
		}
	}
	if (y<n) {
		if (box[x][y]==4) {
			score[player]++;
			hit=1;
		}
	}
	if (hit>0) player=1-player;
}

let m ;
    let n ;
    let player = 1; 
    let score = [0,0]
    let hedge =[];
    let vedge = [];
    let box = [];
    let nn, x, y, zz, count, loop, u, v;

function main(){
   getInput();
}
function getInput(){
    let m ;
    let n ;
    let player = 1; 
    let score = [0,0]
    let hedge =[];
    let vedge = [];
    let box = [];
    let nn, x, y, zz, count, loop, u, v;
    do {
        let filas = prompt("Ingrese el numero de filas de 3 a 9.","4");
        let m = Number(filas)
	} while (m<3 || m>9);
	do {
        let columnas = prompt("Ingrese el numero de columnas de  3 a 9.","4");
        let n = Number(columnas)
	} while (n<3 || n>9);
	for (var i=0;i<=m;i++) {
		hedge[i]=[];
		for (var j=0;j<n;j++) hedge[i][j]=0;
	}
	for (i=0;i<m;i++) {
		vedge[i]=[];
		for (j=0;j<=n;j++) vedge[i][j]=0;
	}
	for (i=0;i<m;i++) {
		box[i]=[];
		for (j=0;j<n;j++) box[i][j]=0;
	}
	nn=2*n+1; 
}