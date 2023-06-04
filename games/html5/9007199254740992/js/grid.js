function Grid(i){this.size=i.size,i.cells?(this.cells=i.cells,this.rebuild()):(this.cells=[],this.build())}Grid.prototype.build=function(){for(var i=0;i<this.size;i++)for(var t=this.cells[i]=[],l=0;l<this.size;l++)t.push(null)},Grid.prototype.rebuild=function(){for(x=0;x<this.size;x++)for(var i=0;i<this.size;i++){var t=this.cells[x][i];null!=t&&(this.cells[x][i]=new Tile({x:t.x,y:t.y},t.value))}},Grid.prototype.randomAvailableCell=function(){var i=this.availableCells();if(i.length)return i[Math.floor(Math.random()*i.length)]},Grid.prototype.availableCells=function(){var i=[];return this.eachCell((function(t,l,e){e||i.push({x:t,y:l})})),i},Grid.prototype.eachCell=function(i){for(var t=0;t<this.size;t++)for(var l=0;l<this.size;l++)i(t,l,this.cells[t][l])},Grid.prototype.cellsAvailable=function(){return!!this.availableCells().length},Grid.prototype.cellAvailable=function(i){return!this.cellOccupied(i)},Grid.prototype.cellOccupied=function(i){return!!this.cellContent(i)},Grid.prototype.cellContent=function(i){return this.withinBounds(i)?this.cells[i.x][i.y]:null},Grid.prototype.insertTile=function(i){this.cells[i.x][i.y]=i},Grid.prototype.removeTile=function(i){this.cells[i.x][i.y]=null},Grid.prototype.withinBounds=function(i){return i.x>=0&&i.x<this.size&&i.y>=0&&i.y<this.size};