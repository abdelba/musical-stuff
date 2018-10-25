export class Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  length: number;
  price: number;
  genre: string;
  thumbUrl: string;
  coverUrl: string;
  releaseDate: Date;
  listenUrl: string;

  formattedLength() {
    const min = Math.floor(this.length / 60000);
    const sec = Math.round((this.length % 60000) / 1000);
    return `${min < 10 ? 0 : ''}${min}:${sec < 10 ? 0 : ''}${sec}`;
  }
}
