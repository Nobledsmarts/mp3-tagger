function file() {
  if( !(voiceTag.files[0] || musicFile.files[0]) ){
      return;
  }
  let downloadbtn = document.getElementsByClassName( 'downloadbtn' )[0];
  let thefilename = filename.value ? filename.value + '.mp3' : false || 'noble_mp3_tagger.mp3';
  let fileArr = [];
  let thelocation = taglocation.value;
  if( thelocation == 'Beginning' ){
    fileArr = [voiceTag.files[0], musicFile.files[0]];
  } else if( thelocation == 'Ending' ){
    fileArr = [musicFile.files[0], voiceTag.files[0]];
  } else {
    fileArr = [voiceTag.files[0], musicFile.files[0], voiceTag.files[0]];
  }
  downloadbtn.classList.add( 'jumpin' );
  setTimeout( () => {
    downloadbtn.classList.add( 'scale' );
  },105 );
  
  initDownload( fileArr, thefilename, musicFile.files[0].type );
}
function initDownload( arr, filename, type ){
  let downloadbtn = document.getElementsByClassName( 'downloadbtn' )[0];
  let downloadLink = window.URL.createObjectURL(
    new Blob(arr, {type}), true
  );
  dLink.href = downloadLink;
  audio.src = downloadLink;
  dLink.setAttribute( 'download', filename );
  downloadbtn.addEventListener( 'click', () => {
    dLink.click();
  } )
}