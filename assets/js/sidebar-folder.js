function spread(count){
    // check 상태와 화살표 방향을 변경합니다.
    document.getElementById('folder-checkbox-' + count).checked = 
    !document.getElementById('folder-checkbox-' + count).checked
    document.getElementById('spread-icon-' + count).innerHTML = 
    document.getElementById('spread-icon-' + count).innerHTML == 'arrow_right' ?
    'arrow_drop_down' : 'arrow_right'
  }
  