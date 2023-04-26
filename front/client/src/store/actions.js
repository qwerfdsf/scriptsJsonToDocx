import API from '../utils/network/API';
export default {
  async click({ state }, payload) {
    const formData = new FormData();
    formData.append('file', payload);
    const data = await API.post('events', formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
    const src = window.URL.createObjectURL(new Blob([new Uint8Array(data.data.data).buffer]));
    const link = document.createElement('a');
    link.href = src;
    link.setAttribute('download', 'Test.docx');
    document.body.appendChild(link);
    link.click();
  }
};
