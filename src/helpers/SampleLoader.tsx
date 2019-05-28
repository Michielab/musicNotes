export const sampleLoader = (url: string, context: any, callback: Function) => {
    console.log('context', context)
    var request = new XMLHttpRequest();
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer: any) {
        callback(buffer);
      });
    };
    request.send();
  };
  