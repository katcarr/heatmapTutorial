var groupData = function(data){

  var groupedData = [];

  for(var i = 0; i < 30; i++){
    for(var j = 0; j < 24; j++){
      groupedData.push({day: i +1 , hour: j ,total: 0});
    }
  }

  var tempDate;

  for(var i = 0; i < groupedData.length; i++){
    data.forEach(function(eventObj){
      tempDate = new Date(eventObj.timestamp);

      if(groupedData[i].day === tempDate.getDate() && groupedData[i].hour === tempDate.getHours()){
        groupedData[i].total = groupedData[i].total + 1;
      }
    });
  }

// console.log(groupedData);
  return groupedData;
};
