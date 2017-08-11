import React from 'react';
import PropTypes from 'prop-types';
import AudioObject from './AudioObject';

import Loading from '/imports/ui/components/common/Loading';

class Listen extends React.Component {

	backgroundImages() {
		setTimeout(() => {
			$('.background-image-holder').each(function appendImg() {
				const imgSrc = $(this).children('img').attr('src');
				$(this).css('background', `url("${imgSrc}")`);
				$(this).children('img').hide();
				$(this).css('background-position', 'initial');
				$(this).addClass('fadeIn');
			});

						// Fade in background images
			setTimeout(() => {
				$('.background-image-holder').each(function fadeImg() {
					$(this).removeClass('blur');
				});
			}, 500);
		}, 100);
	}

	render() {
		const { slug, images } = this.props;
		const pageClass = `page page-${slug}`;
		const headerImageSource = images ? images[0].url : null;
		if (headerImageSource) {
			this.backgroundImages();
		}
		// var page = Pages.findOne({slug: slug});
		if (this.props.loading) {
			return (
				<Loading />
			);
		}

		return (
			// todo: return 404 if !page.length
			<div className={pageClass}>

				<section className="page-head fullscreen image-bg bg-dark">
					<div className="background-image-holder less-blur blur">
						{/* <img className="background-image" alt='image' src={headerImageSource}/>*/}
						<img
							className="background-image"
							role="presentation"
							src="/images/manuscript_header.jpg"
						/>
					</div>

					<div className="background-screen primary" />

					<div className="container v-align-transform">
						<div className="row">
							<div className="col-sm-10 col-sm-offset-1 text-center">
								<h1 className="mb40 mb-xs-16 large">
									Listen to Beyond Words
								</h1>
								<h2>
									Learn more through the exhibition audioguide
								</h2>
							</div>
						</div>
					</div>
				</section>

				<section className="page-content container">
					<div className="listen-page-content">
						<AudioObject
							title="William P. Stoneman on chained books (catalog nos. 1, 2, and 3)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW1.2.3..mp3"
							image="http://iiif.orphe.us/beyondwords/audio/1.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 162, front cover"
						>
							<p>
								My name is Bill Stoneman; I’m curator of Early Books and Manuscripts at the Houghton Library. These books that you’re looking at now in this first case in the exhibition [cat. nos. 1, 2, and 3] are chained books. They’re chained because they’re meant to be reference books. So, they’re the equivalent of books in a Reading Room. These are never supposed to leave the library. They’re a little awkward to use, but it means that the value which we attribute to this object is going to stay with the institution that paid for it.
							</p>
							<p>
								As reference books, they’re certainly not decorated in the way that most other books in the exhibition are. One of the things we hope you’re going to take away from this exhibition is how to look at something and recognize that what your eye is drawn to is planned in advance, that someone has thought about the size of the script, the size of the initial, the amount of decoration along the edges of the page.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on scribal presentation (cat. no. 20)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW20.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/2.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 202, f. 1r"
						>
							<p>
								My name is Jeffrey Hamburger; I teach medieval art at Harvard University. This is an image which goes right to the heart of the monastic use of books in the Middle Ages. It shows a scribe presenting the very book we’re looking at to his abbot. He’s bending his knees in deference.
							</p>
							<p>
								If you look above the head of the scribe, you will notice a few lines written in a small, elegant script. These are actually lines of a Latin poem in which the scribe, in a very self-deprecating way, speaks of having been asked by the abbot to write this book and saying that he would far rather write than be idle. It would have been very difficult, arduous work and very exacting; but no doubt the scribe felt that in copying a book such as this, a commentary on the Gospels, he was acting not only for the benefit of the monastery, but also towards the salvation of his own soul. It’s quite possible that the scribe who penned the poem above his head is the very same craftsman who produced the picture. We don’t necessarily have a division of labor in this instance.
							</p>
						</AudioObject>
						<AudioObject
							title="Anne-Marie Eze on Venetian confraternities (cat. no. 37)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW37.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/11.png/full/320,/0/default.jpg"
							caption="ISGM 2.b.2.4, f. 9v"
						>
							<p>
								I’m Anne-Marie Eze, one of the curators of the show. I’ve chosen to talk about this book because it’s an incredible relic of Venice. The book was made for a confraternity, which was hosted by the Venetian church of San Dominiano; it used to stand in St Mark’s square, but it was razed to the ground during the Napoleonic era. This book contains all of the laws that governed their activities.
							</p>
							<p>
								You can see the full-page image which depicts members of the confraternity, the male members only, kneeling before a vision of the dead Christ emerging from a chalice. There are two things that I love about this image: one is the very realistic depiction of members of the confraternity, who are kneeling there. The men who are wearing purple togas with a black stole draped over their shoulders are of higher rank than the men beside them. Another thing I like about this miniature is that it was produced by the workshop of a very important Venetian artist at the time, Benedetto Bordon. Most of it was painted by an assistant, but if you look at the torso of Christ, the shading to outline his stomach muscles and the depiction of his anatomy is far more realistic than for any of the other figures, and I think that this probably shows the hand of the master of the workshop himself.
							</p>
						</AudioObject>
						<AudioObject
							title="Lisa Fagin Davis on the use and production of this manuscript (cat. no. 43)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW43.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/3.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 704, f. 5r"
						>
							<p>
								My name is Lisa Fagin Davis, and I am the Executive Director of the Medieval Academy of America. These two leaves both come from the same book that was written in the late 12th c. in the Benedictine abbey of Lambach, which was in the northern part of Austria. It was made for the use of the monks for their choir to sing from. In between the text you have musical notation designed to jog the memory of the singer. Each directs how many tones up, how many tones down, how long do you hold the note.
							</p>
							<p>
								This manuscript is known as the Gottschalk antiphonary because it was written, illustrated, and notated by Gottschalk, a monk from Lambach who was very prolific. His initials are very distinctive: the combination of the red with the purple; these very graceful, delicate fingers; little red dots on the cheeks. On the page where you see an angel in the lower left corner, the angel is very dynamic: he’s moving, his feet are crossed, he’s actually gesturing to the rest of the text.
							</p>
							<p>
								This manuscript is fragmentary because by the time the 15th century came along, nobody could read this music anymore. It was useless as a choir book, and because parchment is such a valuable resource, they took it apart and used it as binding scrap. Now, this manuscript is scattered across the world.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on the three leaves of the Noyon Missal"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW48.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/4.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 120, f. 4r"
						>
							<p>
								The three manuscript leaves that you see in this case all come from a single, magnificent manuscript, a collection of texts to perform the mass. The leaf in the center, which is most elaborately illuminated, comes from the most important part, the prayers for the consecration of the host. If you look closely, you’ll see that even the notation of the music of the Gregorian chant on this particular page is written in gold.
							</p>
							<p>
								The decoration has various parts: in the first column, a gigantic initial P inhabited by an elaborate set of intricate vine scrolls lend motion and life with their whirling forms. In the right-hand column, we see a large monogram combining the letters B and D. Two standing figures occupy the space on either side of the monogram. On the left, we see a personification of Ecclesia, the Church, and we see Synagoga, the personification of the Synagogue. This image, if not openly anti-Semitic, is at the least anti-Judaic. Synagoga is blindfolded because from a Christian perspective the Jews are blind, they cannot see the divinity of Christ. And Synagoga pierces the Agnus Dei, the symbol of Christ’s sacrifice--the sacrificial lamb--at the center. The blood that flows from the wound flows directly into the chalice, not unlike that which the celebrant, using this very manuscript, would have held in his hands.
							</p>
						</AudioObject>
						<AudioObject
							title="Nancy Netzer on a gigantic manuscript and a tiny one (cat. no. 49)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW49.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/5.png/full/320,/0/default.jpg"
							caption="HUL MS Lat 186, f. xvii r"
						>
							<p>
								I’m Nancy Netzer, Director of the McMullen Museum and Professor of Art History at Boston College, and I welcome you to Beyond Words. You are standing in front of the largest manuscript in this exhibition. This book is as large as it is because it would have been placed on a lectern during the Mass, surrounded by a choir of singers in the church. The text is a chant that would have been sung during the mass of a martyr. The opening initial shows one of the most important martyrs of the early Christian church, St. Stephen. What you see here is St Stephen, with a very peaceful face, and his head with a rock resting on it and blood streaming down on his face. He’s watched over by God the Father and by a well-dressed man, seated on the left, who was probably the donor of the manuscript.
							</p>
							<p>
								This large manuscript, made for group singing, stands in contrast to a very small manuscript, one of the smallest in the exhibition. It’s a Gospel book, which you’ll see in an adjacent case. It is small enough to have been held in the hand, and was a much more private object. [HUL MS Riant 20, cat. no. 52]
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on the quality of these drawings"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW63.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/6.png/full/320,/0/default.jpg"
							caption=""
						>
							<p>
								These two drawings are so small that they’re easily overlooked, but they’re really of such exquisite quality. They are drawn and painted with an exceptionally fine brush, heightened with a few touches of color. These represent the archangel Gabriel on the left and the Virgin Mary on the right. You can see that he has just descended from the heavens: his hair is flying back in wonderful curls. In the case of the Virgin Mary, she’s shown with long flowing locks that cascade down rather loosely over her shoulders. The Virgin Mary reflects contemporary ideals of courtly beauty. She has a very high forehead, narrow chin and pursed rosy-red lips. We have to imagine them as part of a collection of drawings, all of them showing heads of holy figures, which would have served as a set of models that an artist would be free to deploy in works made in other media, such as panel painting. The survival of these two drawings is nothing less than a small miracle.
							</p>
						</AudioObject>
						<AudioObject
							title="Lisa Fagin Davis on the Beauvais Missal (cat. no. 74)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW74.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/7.png/full/320,/0/default.jpg"
							caption="Wellesley MS 33, f. 2r"
						>
							<p>
								The Beauvais Missal was written in France in the late 13th c. for the use of the cathedral of Beauvais. In terms of appreciating the artistry of the illuminator, I want to you to look at one particular page. It’s the fourth page in the sequence. If you look in the left column, you’ll see the letter E right in the middle. If you look way up close, right next to that E it looks like there’s sort of a red curve. If you look close enough, you’ll see it’s almost like a little dragon. The manuscript is full of beasts – birds, little dogs sometimes, snakes.
							</p>
							<p>
								After the French Revolution, libraries were broken up all through France; cathedral libraries, monastic libraries. The Beauvais Missal disappeared. When it resurfaced, it was in a private collection in France, where it remained until it was sold at Sotheby’s. The buyer was William Randolph Hearst. He sold it to a book dealer in New York, who cut it up immediately and started selling off the pages for $10 each. And now the manuscript is scattered across the world. It’s the object of a project I’m doing right now to digitally reconstruct it online.
							</p>
						</AudioObject>
						<AudioObject
							title="Anne-Marie Eze on manuscripts from the Sistine Chapel (cat. nos. 77 & 78)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW77.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/15.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 734"
						>
							<p>
								You’re looking at a relic from the Sistine Chapel in Rome. It’s several fragments from a manuscript, which have been removed from the book and framed to form one image. At the very end of the 18th century, when Napoleon occupied Rome, French troops ransacked the Vatican and they stole many manuscripts from the Sistine Chapel. This was one of the books that had been used there for centuries for worship.
							</p>
							<p>
								The subject that’s in the middle of the page is the Last Judgment. When people think of the Sistine Chapel and the Last Judgment, they think of Michelangelo’s famous fresco, so it’s very interesting to see an almost-contemporary image of the same subject, to think about relations between monumental art and illuminations in books.
							</p>
							<p>
								The other manuscript from the Sistine Chapel is in the case nearby (cat. no. 78). You can recognize that book because it has three illuminated initials, a T, an M, and a C. The top initial T shows within it a portrait of Clement VII celebrating Mass in the Sistine Chapel. This is such a tiny detail, but on the wall before him is a detail of the decoration that was there before Michelangelo painted his famous Last Judgment. So, this manuscript is also a record of the appearance of the Sistine Chapel before it was decorated by Michelangelo and took on the splendid appearance which it has today.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on the Bible in the vernacular (cat. no. 87)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW87.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/8.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 555, f. 1r"
						>
							<p>
								What we see here is a splendid Bible translated into the French vernacular. It’s divided into two volumes. The first volume, beginning with Genesis, is on your left. What we have here is the Lord God creating the animals of the air and creatures of the sea. It’s quite wonderful how he’s placing the fish into the water. With his other hand, he’s placing a bird with its companions in a tree. The God of Jewish Scripture here has a cross halo that identifies him as Christ. It’s quite typical of illustration of the Middle Ages to underscore the unity of Scripture between the Old and the New Testament by making it clear that Christ was present from the very beginning.
							</p>
							<p>
								If we turn from the first volume to the second, we see another image which represents a king, lying in bed. His eyes are closed, and standing at the end of the bed is a curious figure whose body appears in different colors. What’s represented here is the dream of Nebuchadnezzar as described in the Book of Daniel in the Old Testament. He sees a statue, rather like a pagan idol, made up of various kinds of material, and it is this mysterious figure that Daniel explains to the king when the king asks him to reveal the meaning of his mysterious dream.
							</p>
							<p>
								This book was commissioned by the King of France himself, Charles V. This manuscript, written in French, formed part of a vast program of commissions from the King to translate important works into the vernacular. Part of their purpose was to impose upon the entire region which he covered a single, cohesive, uniform language.
							</p>
						</AudioObject>
						<AudioObject
							title="Lisa Fagin Davis on the imagery of f. 143r (cat no. 107)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW107.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/9.png/full/320,/0/default.jpg"
							caption="BPL MS q Med 81, f. 143r.
"
						>
							<p>
								This manuscript comes from the first quarter of the 15th c. During this period, literacy among women was on the rise, and this is an example of a book that was made for a woman. In the page that we’re looking at, we actually see her: she is the woman in a green dress, kneeling at an altar. The owner has been identified as a woman named Marguerite. You can see her initial M in the bottom central margin. All the coats of arms in the four corners represent her family and her husband, Thomas. It is thought that this book was a wedding gift from him to her when they married in 1427.
							</p>
							<p>
								One of the really magnificent things is the carnival atmosphere of the margin: the bright colors, the leaves, the birds. The archangel Michael stands behind her, gesturing, showing her the vision before her. The scene that she’s looking at is Pope Gregory the Great at a moment in his life when he is said, in the middle of saying Mass, to have seen a vision of Christ emerging from the tomb as the Man of Sorrows, which is exactly what’s happening here. So we’re seeing the owner of the book, with the book open in front of her presumably representing this very book, looking at Gregory, which is a vision, having a vision – so there’s a lot of depth in this scene.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on Jean Bourdichon, the illustrator of this manuscript (cat. no. 112)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW112.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/14.png/full/320,/0/default.jpg"
							caption="ISGM MS 6.T.1, f. 22"
						>
							<p>
								At the very core of the exhibition, you have an opportunity to do what is otherwise impossible, and that is to page through a manuscript – in this case a splendid Book of Hours by one of the great French court artists of the late Middle Ages and early Renaissance. His name was Jean Bourdichon. Bourdichon’s style was enlivened by a great variety of light effects, and this particular miniature, representing the arrest of Christ in the garden at Gethsemane, is a splendid example. We see two lanterns. One, on the ledge in the foreground, illuminates the face of Malchus, whose ear has been cut off and Christ is reattaching it. If we look carefully at the architectural frame, we can see that the column – particularly the one on the left – casts a shadow. And so it is light that unites our space – the viewer’s – with that of the holy figures.
							</p>
							<p>
								As you’ll notice, walking through this section of the exhibition, almost all of the miniatures from Bourdichon’s books of hours are placed in very elaborate architectural frames. No two are alike. I would encourage you to look very closely, to admire the skill with which he manipulates the spatial relationships between us, the viewers, and the devotional content on the page.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on St Barbara (cat. no. 116)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW116.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/10.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 443, f. 112v"
						>
							<p>
								I think I’m going to hazard a suggestion that this manuscript is among the greatest works of art in this exhibition. It’s certainly among the most ambitious books of hours ever painted in the 15th century.
							</p>
							<p>
								Imagine yourself one of the owners of this magnificent manuscript, holding it in your hands, looking at this image of St Barbara and seeing her engaged in an activity very similar to your own. She has been reading, but she’s set the book aside and laid it in her lap on what appears to be a blue cloth. This was a cloth, very often velvet, that was attached to the binding and that allowed one to wrap a book when one closed its covers to protect it. Her eyes are downcast. You can imagine her meditating on images very like those that you see on the right-hand page (f. 113r). The scenes in the margins there depict various episodes from her sufferings in martyrdom. So in effect, Barbara, by her expression, is inviting us to engage more deeply with the content of the book: the meaning of her own life.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on Simon Bening’s Annunciation (cat. no. 117)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW117.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/12.png/full/320,/0/default.jpg"
							caption="BPL pb. Med 35"
						>
							<p>
								What we have before us here is a collection of 14 miniatures, all of which were taken from a small devotional book painted in Bruges (modern Belgium) by Simon Bening, the most famous book-painter of his day.
							</p>
							<p>
								Let’s have a closer look at the Annunciation. The Virgin Mary is kneeling, wearing a bright blue robe; she’s turning her head to greet the archangel Gabriel, with a view to a bed and a half-open window behind. It’s interesting to note that textiles play a very prominent role in this miniature; textiles were central to Bruges’s economic success. Whether it’s the red drapes of the bed, the blue of Mary’s garments, the magnificent liturgical vestments of the angel, or the green cloth which is pulled to one side, textiles structure this image. Indeed, the green curtain is reminiscent of the curtains which were used to shelter and protect the altar. In some respects, it’s almost as if the Annunciation, here, has a liturgical rather than a simply narrative character.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on Playing Knucklebones in a Cemetery (cat. no. 121)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW121.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/13.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 253, f. 43r"
						>
							<p>
								This page is perhaps my favorite in this beautiful Book of Hours. In the bottom margin of this page, you see three children irreverently playing a game of knucklebones, not unlike the modern game of jacks, in a graveyard. They’ve laid out the knucklebones on the tombs. What, pray tell, is this scene doing in the margins of a page which marks the beginning of the Hours of Holy Wisdom, as the rubric in red tells us? In the initial, we see God accompanied by a consort of angels playing music, and there are other angels playing instruments or singing in the elaborate Gothic architecture on either side.
							</p>
							<p>
								While there was a long tradition in Gothic manuscript illumination of satirical or irreverent imagery in the margins, in this case the children playing knucklebones reminds us of the vanity and transience of everyday life. Knucklebones – as the name suggests – were the knucklebones from pig’s trotters or from other animals, and the fact that children are playing with bones in a graveyard reminds us of the inevitability of death.
							</p>
						</AudioObject>
						<AudioObject
							title="William P. Stoneman on the system of collective indulgences (cat no. 142)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW142.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/22.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 237"
						>
							<p>
								If I’m looking for an example of how big a piece of parchment can be, this is about as big as they get. The animal from which this came can’t get much bigger than that!
							</p>
							<p>
								You may see it as very unlike the other objects in the exhibition because it was meant to be a single sheet. It’s an ad for the power of the Church. It’s dated 1336, and it’s meant to encourage individuals to give money to the Church, and for that money it gives you an indulgence and allows you to spend less time in Purgatory and move on to Heaven. Around the top and the two sides is a kind of hierarchy of images of power. At the lower edge, the images of power have been taken away. Those little pieces of string and parchment that are no longer there once held seals for the fifteen cardinals who were authenticating this document. Whether it was tacked onto a wall or propped up, we’re not sure. But it was meant to be displayed prominently in a church, so that you could see it from a distance.
							</p>
						</AudioObject>
						<AudioObject
							title="Megan McNamee on this unusual object (cat. no. 165)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW165.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/17.png/full/320,/0/default.jpg"
							caption="HUL MS Typ 278, f. 10r"
						>
							<p>
								My name is Megan McNamee, and I’m an assistant curator for Beyond Words. What you’re looking at now will look very different from many of the objects you’ve seen in this exhibition. But it is a book. It’s comprised of nineteen folios, each folded into a tiny packet and sewn together at its top. Once there would have been a cord attached to it, and that would have allowed you to tie this manuscript to your belt and carry it around. The red is a now very worn velvet, and little tassels hang from the bottom in green silk thread. Most of the manuscript is given over to a calendar. Diagnosis, surgery, the taking of medicine was all governed by, especially, the position of the moon and what phase the moon was in. This was essential information for the practice of medicine.
							</p>
							<p>
								Right next to it, you can see a facsimile in which one of the pages is open. The grid has thirty rows; each row is for a particular day of the month. This page is for the month of September. Each month was associated with a different labor; September gathers grapes. Indeed, we see in the illumination a man, dressed in pale blue, reaching forward with a curved knife to cut a bunch of grapes and drop his grapes in a basket. What you’re looking at is really the medieval precursor to the smartphone. Of course, one thing we all have on our smartphones is a calendar.
							</p>
						</AudioObject>
						<AudioObject
							title="Matilda Bruckner on Christine de Pizan (f. 1r) (cat. no. 182)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW182.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/18.png/full/320,/0/default.jpg"
							caption="BPL Ms f Med 101, f. 1r"
						>
							<p>
								My name is Matilda Bruckner. I’m a retired faculty member from Boston College. This work dates from around 1405. It’s a wonderful manuscript of Christine de Pizan.
							</p>
							<p>
								Christine de Pizan was an incredibly prolific author in the fifteenth century. She was a woman author, which is quite unusual. This is really a manual, a code of conduct. The book starts out quite beautifully with this amazing frontispiece. The woman we see in the bed is Christine. She’s exhausted and she wants to sleep. These three virtues come and they are incredibly urgent. One of them is actually tugging at her arm! They tell her, “you must continue the book that you’ve started.” We see on the right the book open, and the contents have been conveyed orally, and all these women gathered around in front. The details of their dress indicate their social status. It’s visibly showing us that this is a book addressing women of many different stations.
							</p>
							<p>
								The main way that people read in the Middle Ages is in fact reading out loud for an audience. Most readers are in fact listeners in the Middle Ages.
							</p>
						</AudioObject>
						<AudioObject
							title="William P. Stoneman on the Royal Pastime (cat. no. 184)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW184.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/19.png/full/320,/0/default.jpg"
							caption="HUL Typ 130 f. 101v"
						>
							<p>
								If you look at the image of the two men and the horse, there’s something very aristocratic about the two knights meeting in the forest and how to behave in the chivalric fashion. It’s a model book of a kind of behavior made for Louis of Gruuthuse, a very important and, clearly, very wealthy man at the time. There’s something interesting at the very bottom of the page: you can see the fleurs-de-lis from France, and you see this kind of cannon. It’s not just a cannon, it’s a cannon shooting forth a cannonball. Three times, this man has had his little emblem put in, twice on either side of the crest at the bottom of the page and once in the initial. His motto is there on the banderoles that squiggle around in three different places. He wanted people to know that this was his book, that he had commissioned this copy. This was very important to him.
							</p>
						</AudioObject>
						<AudioObject
							title="Jeffrey Hamburger on the frontispieces of Livy's Decades (cat. nos. 188 & 189)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW188.189.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/20.png/full/320,/0/default.jpg"
							image2="http://iiif.orphe.us/beyondwords/audio/23.png/full/320,/0/default.jpg"
							caption="HUL MS Richardson 32.1, f. 1r and HUL MS Richardson 32.2, f. 1r"
						>
							<p>
								The two huge volumes in front of you represent the two parts of Livy’s Decades, a monumental history of Rome which was read throughout the Middle Ages and which served as a kind of handbook on good government for medieval rulers. Each of the two volumes opens with a magnificent frontispiece. These two pictures appear quite different from one another, and that’s because they were painted almost 40 years apart.
							</p>
							<p>
								The frontispiece in which the page itself seems to open up on a grand, palatial interior where the king is being crowned is the earlier of the two. Hannibal, the ruler of Carthage, is the prince who’s being crowned on this page. The artist goes out of his way to ensure that we recognize Hannibal’s African origins. We see a black man kneeling in deference, and we see a second figure with a scimitar, dressed in exotic, Orientalizing garb.
							</p>
							<p>
								The artist of the later volume places the action in a series of interlinked structures, which are cut away to reveal their interiors. He uses the different spaces to articulate the hierarchy of the different social groups who pay homage to the emperor. Livy’s History served as a manual on rulership for medieval monarchs, so it’s not surprising to find such an emphasis on rank and hierarchy. It’s expressed not only through details of costume, it’s also expressed by their placement relative to one another within the image.
							</p>
						</AudioObject>
						<AudioObject
							title="Nancy Netzer on f. 80r (cat. no. 190)"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW190.mp3"
							image="http://iiif.orphe.us/beyondwords/audio/21.png/full/320,/0/default.jpg"
							caption="HUL MS Richardson 38, f. 80r"
						>
							<p>
								This is one of my very favorite books in the exhibition. It contains Virgil’s Aeneid in Latin. It’s certainly a deluxe production. It was commissioned by a man called Jacques Coeur, who lived in Bourges, one of the richest merchants in France. There are a number of books of Virgil’s Aeneid made in the 15th century. This is the most completely illustrated of them, and the illustration that we see here is one that has no parallels. The past is in the background quite literally here, with the Trojan Horse being loaded with Greek soldiers and then the storming of the city of Troy, which causes Aeneas to flee. In the foreground, we see something more recent in the story: we see his boat pulling up at Carthage. He disembarks and is being greeted by Dido, the Queen of Carthage.
							</p>
							<p>
								What’s very interesting to me is that it’s all cast in the guise of 1450, when this book was made. Aeneas is wearing a doublet and hose, with long pointy shoes which were very fashionable at the time. We also see his two attendants, one of whom seems to be a medieval falconer. To the right, Dido’s house is in the process of being built. The house is very reminiscent of the grand mansion that Jacques Coeur built for himself in Bourges. This image is a window on the past, but it’s also a mirror of Jacques Coeur’s life and Jacques Coeur seeing himself very much as Aeneas.
							</p>
						</AudioObject>
					</div>
				</section>
			</div>
		);
	}
}

export default Listen;
