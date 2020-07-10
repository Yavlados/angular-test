import { Input, OnInit, Component} from '@angular/core'
import { Card } from '../app.component'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input()card:Card
    @Input()index:number

    title:string = 'My Title'
    jsonObj:object = {
        name: 'Vlad',
        info: {
            job: 'Web',
            age: 22
        }
    }

    disabled:boolean = false
    imgUrl:string = 'https://www.wikihow.com/images/6/64/Stop-a-Dog-from-Jumping-Step-6-Version-2.jpg'
    textColor:string = ''
    cardDate:Date = new Date()

    ngOnInit (){
        setTimeout( () => {
            this.imgUrl = 'https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/images/article/gettyimages-1085400324.jpg?itok=FZNqEdeU'
            this.disabled = true
        }, 3000)
        console.log(this.card)
    }

    inputHandler( event:any ) {
        const newValue = event.target.value
        console.log(newValue)
        this.title = newValue
    }

    customInputHandler(value:any){
        this.title = value
    }

    getInfo():string {
        return 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consectetur sapiente libero quibusdam assumenda similique illo omnis eaque ab commodi quaerat vel at laudantium, praesentium maxime animi, doloribus iste esse?'
    }
}