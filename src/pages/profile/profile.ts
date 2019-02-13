import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, normalizeURL } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  fname = "0";
  lname;
  company;
  pic;
  position;
  img;
  initials;
  phone;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider,public toastCtrl: ToastController,public imagePicker: ImagePicker) {
    this.authProvider.getUserFirstName()
      .then(fname => {
      
        this.fname = fname;
        
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })




      this.authProvider.getUserLastName()
      .then(fname => {
        
        this.lname = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.authProvider.getUserCompany()
      .then(fname => {
        
        this.company = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.authProvider.getUserPosition()
      .then(fname => {
        
        this.position = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.authProvider.getUserPic()
      .then(fname => {
        
        this.pic = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.authProvider.getUserPic()
      .then(fname => {
        
        this.initials = this.fname.toString().substring(0,1) + "" + this.lname.toString().substring(0,1);
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.img = document.getElementById("jj") as HTMLImageElement;
      
       
  }


  public error:string[]=[];

  setValue(name:string,index:number)
    {
      console.log(name);
      this.error[index]=name.substring(0,2);
    }

    

  second(){ 
    var a;
    this.authProvider.getUserLastName()
    .then(fname => {
    
      a = fname;
        console.log(a);

        return a.charAt(0);
      
    })
    .catch(error => {
      console.log('OOPS, error', error)
    })
    
}

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
    }

  
uploadImageToFirebase(image){
	image = normalizeURL(image);

	//uploads img to firebase storage
	this.authProvider.uploadImage(image)
	.then(photoURL => {
		console.log(photoURL);
		this.img.src = photoURL;
		let toast = this.toastCtrl.create({
			message: 'Image was updated successfully',
			duration: 3000
		});
		toast.present();
		})
	}

openImagePicker(){
	this.imagePicker.hasReadPermission().then(
		(result) => {
			if(result == false){
				// no callbacks required as this opens a popup which returns async
				this.imagePicker.requestReadPermission();
			}
			else if(result == true){
				this.imagePicker.getPictures({
					maximumImagesCount: 1
				}).then(
					(results) => {
						for (var i = 0; i < results.length; i++) {
							this.uploadImageToFirebase(results[i]);
						}
					}, (err) => console.log(err)
				);
			}
		}, (err) => {
			console.log(err);
		});
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

  }


  signOut() {
    this.authProvider.signOut();
  }
}
