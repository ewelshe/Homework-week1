function updownright(){

  while(getColor()!="red"){
  down();
	}

  
	if (getColor()=="red"){
	right();
  right();
  }
    while(getColor()!="red"){
  	up();
	}

	if (getColor()=="red"){
	right();
  right();
  }
    
}

  updownright();
  updownright();
  updownright();
