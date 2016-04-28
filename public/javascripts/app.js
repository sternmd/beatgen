$(document).ready(function(){
  var quoteLibrary=[
    {
    quote: "“There was nowhere to go but everywhere, so just keep on rolling under the stars.”",
    name:"Jack Kerouac"
    },
    {
      quote:"“Live, travel, adventure, bless, and don't be sorry.”",
      name:"Jack Kerouac"
    },
    {
      quote:"“One day I will find the right words, and they will be simple.”",
      name:"Jack Kerouac"
    },
    {
      quote:"“Follow your inner moonlight; don&rsquo;t hide the madness.”",
      name:	"Allen Ginsberg"
    },
    {
      quote:"“I don&rsquo;t think there is any truth. There are only points of view. ”",
      name:	"Allen Ginsberg"
    },
    {
      quote:"“I saw the best minds of my generation destroyed by madness, starving hysterical naked, dragging themselves through the negro streets at dawn looking for an angry fix angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of the night.”",
      name:	"Allen Ginsberg"
    },
    {
      quote:"“The weight of the world is love. Under the burden of solitude, under the burden of dissatisfaction the weight, the weight we carry is love. ”",
      name:	"Allen Ginsberg"
    },

    { quote:"“Concentrate on what you want to say to yourself and your friends. Follow your inner moonlight; don&rsquo;t hide the madness. You say what you want to say when you don&rsquo;t care who&rsquo;s listening.”",
    name:	"Allen Ginsberg"	},

    { quote:"“We&rsquo;re all golden sunflowers inside.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Poetry is not an expression of the party line. It&rsquo;s that time of night, lying in bed, thinking what you really think, making the private world public, that&rsquo;s what the poet does.”",
    name:	"Allen Ginsberg"	},

    { quote:"“I know too much and not enough”",
    name:	"Allen Ginsberg"	},

    { quote:"“Our heads are round so thought can change direction”",
    name:	"Allen Ginsberg"	},

    { quote:"“Poetry is the one place where people can speak their original human mind. It is the outlet for people to say in public what is known in private. ”",
    name:	"Allen Ginsberg"	},

    { quote:"“I really believe, or want to believe, really I am nuts, otherwise I&rsquo;ll never be sane.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Everything is holy! everybody&rsquo;s holy! everywhere is holy! everyday is in eternity! Everyman&rsquo;s an angel!”",
    name:	"Allen Ginsberg"	},

    { quote:"“I really would like to stop working forever–never work again, never do anything like the kind of work I’m doing now–and do nothing but write poetry and have leisure to spend the day outdoors and go to museums and see friends. And I’d like to keep living with someone — maybe even a man — and explore relationships that way. And cultivate my perceptions, cultivate the visionary thing in me. Just a literary and quiet city-hermit existence.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Democracy! Bah! When I hear that I reach for my feather boa!”",
    name:	"Allen Ginsberg"	},

    { quote:"“Everybody&rsquo;s serious but me.”",
    name:	"Allen Ginsberg"	},

    { quote:"“America I&rsquo;ve given you all and now I&rsquo;m nothing.”",
    name:	"Allen Ginsberg"	},

    { quote:"“We are great writers on the same dreadful typewriter”",
    name:	"Allen Ginsberg"	},

    { quote:"“It isn&rsquo;t enough for your heart to break because everybody&rsquo;s heart is broken now.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Poets are damned… but see with the eyes of angels.”",
    name:	"Allen Ginsberg"	},

    { quote:"“I touch your book and dream of our odyssey in the supermarket and feel absurd.”",
    name:	"Allen Ginsberg"	},

    { quote:"“My own experience is that a certain kind of genius among students is best brought out in bed.”",
    name:	"Allen Ginsberg"	},

    { quote:"“what sphinx of cement and aluminium bashed open their skulls and ate up their brains and imagination”",
    name:	"Allen Ginsberg"	},

    { quote:"“To gain your own voice, forget about having it heard. Become a saint of your own province and your own consciousness.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Candor disarms paranoia.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Which way will the sunflower turn surrounded by millions of suns?”",
    name:	"Allen Ginsberg"	},

    { quote:"“To gain your own voice you have to forget about having it heard.”"	,
    name:	"Allen Ginsberg"	},

    { quote:"“America, why are your libraries full of tears?”",
    name:	"Allen Ginsberg"	},

    { quote:"“America I used to be a communist when I was a kid and I&rsquo;m not sorry.”",
    name:	"Allen Ginsberg"	},

    { quote:"“in my dreams you walk dripping from a sea journey on the highway across America in tears to the door of my cottage in the Western night”",
    name:	"Allen Ginsberg"	},

    { quote:"“Well, while I&rsquo;m here I&rsquo;ll do the work — and what&rsquo;s the work? To ease the pain of living. Everything else, drunken dumbshow.”",
    name:	"Allen Ginsberg"	},

    { quote:"“The closet door is open for me, where I left it, since I left it open, it has graciously stayed open.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Holy the supernatural extra brilliant intelligent kindness of the soul!”",
    name:	"Allen Ginsberg"	},

    { quote:"“What if someone gave a war and Nobody came?”",
    name:	"Allen Ginsberg"	},

    { quote:"“I learned a world from each / one whom I loved”",
    name:	"Allen Ginsberg"	},

    { quote:"“I want people to bow as they see me and say he is gifted with poetry, he has seen the presence of the creator. ”",
    name:	"Allen Ginsberg"	},

    { quote:"“Who can live with this Consciousness and not wake frightened at sunrise?”",
    name:	"Allen Ginsberg"	},

    { quote:"“Sanity - a trick of agreement”",
    name:	"Allen Ginsberg"	},

    { quote:"“All these books are published in Heaven.”",
    name:	"Allen Ginsberg"	},

    { quote:"“I heard you asking questions of each: Who killed the pork chops? What price bananas? Are you my Angel?”",
    name:	"Allen Ginsberg"	},

    { quote:"“The hero surviving his own murder, his own suicide, his own addiction, surviving his own disappearance from the scene”",
    name:	"Allen Ginsberg"	},

    { quote:"“The typewriter is holy the poem is holy the voice is holy the hearers are holy the ecstacy is holy!”",
    name:	"Allen Ginsberg"	},

    { quote:"“The universe is mad, slightly mad.”",
    name:	"Allen Ginsberg"	},

    { quote:"“What came is gone forever every time”",
    name:	"Allen Ginsberg"	},

    { quote:"“What is obscenity? And to whom?”",
    name:	"Allen Ginsberg"	},

    { quote:"“Tell your secrets.(In reply to the question “How does one become a prophet?)”",
    name:	"Allen Ginsberg"	},

    { quote:"“War is good business Invest your son”",
    name:	"Allen Ginsberg"	},

    { quote:"“Scientist alone is true poet.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Thank God I am not God! Thank God I am not God!”",
    name:	"Allen Ginsberg"	},

    { quote:"“No more to say, and nothing to weep for”",
    name:	"Allen Ginsberg"	},

    { quote:"“I had a moment of clarity, saw the feeling in the heart of things, walked out to the garden crying.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Mind is shapely, Art is shapely.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Trees scream and drop bright leaves”",
    name:	"Allen Ginsberg"	},

    { quote:"“Thus, as the Buddha said to a lady who offered him a curse,the gift is returned to the giver when it is not accepted”",
    name:	"Allen Ginsberg"	},

    { quote:"“America, the plum blossoms are falling.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Who scribbled all night rocking and rolling over lofty incantations which in the yellow morning were stanzas of gibberish.”",
    name:	"Allen Ginsberg"	},

    { quote:"“I have no other possessions of value but my soul.”",
    name:	"Allen Ginsberg"	},

    { quote:"“If we don&rsquo;t show anyone, we&rsquo;re free to write anything.”",
    name:	"Allen Ginsberg"	},

    { quote:"“Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night”",
    name:	"Allen Ginsberg"	},

    { quote:"“I broadcast thru Time”",
    name:	"Allen Ginsberg"	},

    { quote:"“Forget pleasure and Ambition”",
    name:	"Allen Ginsberg"	},

    { quote:"“if all else fails you can read”",
    name:	"Allen Ginsberg"	},

    { quote:"“Another lover hits the universe. The circle is broken. But with death comes rebirth. And like all lovers and sad people, I am a poet.”",
    name:	"Allen Ginsberg"	},

    { quote:"“First word … best word.”",
    name:	"Allen Ginsberg"	},

    { quote:"“To gain your own voice, you have to forget about having it heard.”",
    name:	"Allen Ginsberg"	},

    { quote:"“I&rsquo;m with you in Rockland, where we are great writers on this same dreadful typewriter.”",
    name:	"Allen Ginsberg"	},

    { quote:"“I write poetry because I want to be alone and want to talk to people.”",
    name:	"Allen Ginsberg"	},
    { quote: "“A paranoid is someone who knows a little of what&rsquo;s going on. ”"	,
    name:	"William S. Burroughs"	},

    { quote: "“There is no intensity of love or feeling that does not involve the risk of crippling hurt. It is a duty to take this risk, to love and feel without defense or reserve.”",
    name:	"William S. Burroughs"	},

    { quote: "“Nobody owns life, but anyone who can pick up a frying pan owns death.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“Hustlers of the world, there is one mark you cannot beat: the mark inside.”",
    name:	"William S. Burroughs"	},

    { quote: "“Silence is only frightening to people who are compulsively verbalizing.”",
    name:	"William S. Burroughs"	},

    { quote: "“I don&rsquo;t care if people hate my guts; I assume most of them do. The important question is whether they are in a position to do anything about it.”",
    name:	"William S. Burroughs"	},

    { quote: "“Desperation is the raw material of drastic change. Only those who can leave behind everything they have ever believed in can hope to escape. ”",
    name:	"William S. Burroughs"	},

    { quote: "“Whether you sniff it smoke it eat it or shove it up your ass the result is the same: addiction.”",
    name:	"William S. Burroughs"	},

    { quote: "“Your mind will answer most questions if you learn to relax and wait for the answer.”",
    name:	"William S. Burroughs"	},

    { quote: "“If I had my way we&rsquo;d sleep every night all wrapped around each other like hibernating rattlesnakes.”",
    name:	"William S. Burroughs"	},

    { quote: "“You were not there for the beginning. You will not be there for the end. Your knowledge of what is going on can only be superficial and relative”",
    name:	"William S. Burroughs"	},

    { quote: "“The first and most important thing an individual can do is to become an individual again, decontrol himself, train himself as to what is going on and win back as much independent ground for himself as possible”",
    name:	"William S. Burroughs"	},

    { quote: "“Love is a haunting melody that I have never mastered, and I fear I never will.”",
    name:	"William S. Burroughs"	},

    { quote: "“The question is frequently asked: Why does a man become a drug addict?"	,
    name:	"William S. Burroughs"	},

    { quote: "“When you stop growing you start dying.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“In the U.S. you have to be a deviant or die of boredom.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“You know a real friend? Someone you know will look after your cat after you are gone.”",
    name:	"William S. Burroughs"	},

    { quote: "“There is nothing more provocative than minding your own business.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“After one look at this planet any visitor from outer space would say &rsquo;I want to see the manager.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“Never do business with a religious son-of-a-bitch. His word ain&rsquo;t worth a shit -- not with the Good Lord telling him how to fuck you on the deal.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“Love? What is it? Most natural painkiller what there is.”",
    name:	"William S. Burroughs"	},

    { quote: "“Language is a virus from outer space”"	,
    name:	"William S. Burroughs"	},

    { quote: "“Artists to my mind are the real architects of change, and not the political legislators who implement change after the fact. ”",
    name:	"William S. Burroughs"	},

    { quote: "“Writers, like elephants, have long, vicious memories. There are things I wish I could forget.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“There are no innocent bystanders ... what are they doing there in the first place?”"	,
    name:	"William S. Burroughs"	},

    { quote: "“I am getting so far out one day I won&rsquo;t come back at all.”",
    name:	"William S. Burroughs"	},

    { quote: "“Every man has inside himself a parasitic being who is acting not at all to his advantage.”",
    name:	"William S. Burroughs"	},

    { quote: "“Smash the control images. Smash the control machine.”",
    name:	"William S. Burroughs"	},

    { quote: "“Panic is the sudden realization that everything around you is alive.”",
    name:	"William S. Burroughs"	},

    { quote: "“Nothing exists until or unless it is observed. An artist is making something exist by observing it. And his hope for other people is that they will also make it exist by observing it. I call it &rsquo;creative observation.&rsquo; Creative viewing.”",
    name:	"William S. Burroughs"	},

    { quote: "“Man is an artifact designed for space travel. He is not designed to remain in his present biologic state any more than a tadpole is designed to remain a tadpole.”",
    name:	"William S. Burroughs"	},

    { quote: "“The face of &rsquo;evil&rsquo; is always the face of total need.”",
    name:	"William S. Burroughs"	},

    { quote: "“Knowing you might not make it... in that knowledge courage is born.”"	,
    name:	"William S. Burroughs"	},

    { quote: "“The best way to keep something bad from happening is to see it ahead of time... and you can&rsquo;t see it if you refuse to face the possibility.”",
    name:	"William S. Burroughs"	},

    { quote: "“There couldn&rsquo;t be a society of people who didn&rsquo;t dream. They&rsquo;d be dead in two weeks.”",
    name:	"William S. Burroughs"	},

    { quote: "“A cat&rsquo;s rage is beautiful, burning with pure cat flame, all its hair standing up and crackling blue sparks, eyes blazing and sputtering.”",
    name:	"William S. Burroughs"	},

    { quote: "“Whether you like it or not, you are committed to the human endeavor. I cannot ally myself with such a purely negative goal as avoidance of suffering. Suffering is a chance you take by the fact of being alive.”",
    name:	"William S. Burroughs"	},

    { quote: "“I bear my burden proudly for all to see, to conquer prejudice and ignorance and hate with knowledge and sincerity and love. Whenever you are threatened by a hostile presence, you emit a thick cloud of love like an octopus squirts out ink...”",
    name:	"William S. Burroughs"	},

    { quote: "“Thou shalt not be such a shit, you don&rsquo;t know you are one.”",
    name:	"William S. Burroughs"	},

    { quote: "“I miss you so much your absence causes me, at times, accute pain. I don&rsquo;t mean sexually. I mean in connection with my writing.”",
    name:	"William S. Burroughs"	},

    { quote: "“Like all pure creatures, cats are practical.”",
    name:	"William S. Burroughs"	},

    { quote: "“How I hate those who are dedicated to producing conformity.”",
    name:	"William S. Burroughs"	},

    { quote: "“The dream is a spontaneous happening and therefore dangerous to a control system set-up by the non-dreamers”",
    name:	"William S. Burroughs"	},

    { quote: "“There is in fact something obscene and sinister about photography, a desire to imprison, to incorporate, a sexual intensity of pursuit.”",
    name:	"William S. Burroughs"	},

    { quote: "“Nothing is True, Everything is Permitted”",
    name:	"William S. Burroughs"	},

    { quote: "“Open your mind and let the pictures out”",
    name:	"William S. Burroughs"	},

    { quote: "“as soon as you know you are in prison, you have a possibility to escape.”",
    name:	"William S. Burroughs"	},

    { quote: "“That old feeling is still in my leaking heart.”",
    name:	"William S. Burroughs"	},

    { quote: "“Cheat your landlord if you can -- and must -- but do not try to shortchange the Muse.”",
    name:	"William S. Burroughs"	},

    { quote: "“Confusion hath fuck his masterpiece.”",
    name:	"William S. Burroughs"	},

    { quote: "“It&rsquo;s the little touches that make a future solid enough to destroy.”",
    name:	"William S. Burroughs"	},

    { quote: "“in the magical universe there are no coincidences and there are no accidents. nothing happens unless someone wills it to happen”",
    name:	"William S. Burroughs"	},

    { quote: "“Paranoia is just having the right information.”",
    name:	"William S. Burroughs"	},

    { quote: "“The cat does not offer services. The cat offers itself.”",
    name:	"William S. Burroughs"	},

    { quote: "“How long does it take man to realize that he cannot want what he wants? You have to live in hell to see heaven.”",
    name:	"William S. Burroughs"	},

    { quote: "“when I become death. Death is the seed from which I grow.”",
    name:	"William S. Burroughs"	},

    { quote: "“As one judge said to another judge: be just. And if you can’t be just, be arbitrary”",
    name:	"William S. Burroughs"	},

    { quote: "“Happiness is a byproduct of function, purpose, and conflict; those who seek happiness for itself seek victory without war.”",
    name:	"William S. Burroughs"	},

    { quote: "“I began to get a feeling (...) of being the only sane man in a nut house. It doesn&rsquo;t make you feel superior but depressed and scared, because there is nobody you can contact.”",
    name:	"William S. Burroughs"	},

    { quote: "“Too perfect to be sexually attractive.”",
    name:	"William S. Burroughs"	},

    { quote: "“I am not a person and I am not an animal. There is something I am here for something I must do before I can go.”",
    name:	"William S. Burroughs"	},

    { quote: "“In deep sadness there is no place for sentimentality. It is as final as the mountains: a fact. There it is. When you realize it you cannot complain.”",
    name:	"William S. Burroughs"	},

    { quote: "“And if you&rsquo;re doing a deal with a religious son of a bitch, get it in writing.”",
    name:	"William S. Burroughs"	},

    { quote: "“Is Control controlled by its need to control? Answer: yes.”",
    name:	"William S. Burroughs"	},

    { quote: "“When he smiled the fear flew away in little pieces of light...”",
    name:	"William S. Burroughs"	},

    { quote: "“Last night I woke up with someone squeezing my hand. It was my other hand.”",
    name:	"William S. Burroughs"	},

    { quote: "“Like Spain, I am bound to the past.”",
    name:	"William S. Burroughs"	},

    { quote: "“Jesus Christ said &rsquo;by their fruits ye shall know them,&rsquo; not by their disclaimers.”",
    name:	"William S. Burroughs"	},

    { quote: "“People have nothing to say, but they are afraid of saying nothing, so what they do say comes out flat and vapid and meaningless. The shadow of death is on every face.”",
    name:	"William S. Burroughs"	},

    { quote: "“Cowboy: New York hood talk means kill the mother fucker wherever you find him. A rat is a rat is a rat is a rat. Is an informer.”",
    name:	"William S. Burroughs"	},

    { quote: "“A writer does not own words any more than a painter owns colors. So lets dispense with this originality fetish… Look, listen and transcribe and forget about being original.”",
    name:	"William S. Burroughs"	},

    { quote: "“Tell the truth once and for all and shut up forever.”",
    name:	"William S. Burroughs"	},

    { quote: "“If I knew how much you loved me, I would’ve shot you sooner.”",
    name:	"William S. Burroughs"	},

    { quote: "“You see, control can never be a means to any practical end...It can never be a means to anything but more control...like junk..”",
    name:	"William S. Burroughs"	},

    { quote: "“You need a good bedside manner with doctors or you will get nowhere.”",
    name:	"William S. Burroughs"	},

    { quote: "“Cheat your landlord if you can and must, but do not try to shortchange the Muse. It cannot be done. You can&rsquo;t fake quality any more than you can fake a good meal.”",
    name:	"William S. Burroughs"	},

    { quote: "“America is not a young land: it is old and dirty and evil. Before the settlers, before the Indians... the evil was there... waiting.”",
    name:	"William S. Burroughs"	},

    { quote: "“Sometimes paranoia&rsquo;s just having all the facts.”",
    name:	"William S. Burroughs"	},

    { quote: "“It is not the intensity but the duration of pain that breaks the will to resist.”",
    name:	"William S. Burroughs"	},

    { quote: "“O death where is thy sting? The man is never on time...”",
    name:	"William S. Burroughs"	},

    { quote: "“After a shooting spree, they always want to take the guns away from the people who didn&rsquo;t do it. I sure as hell wouldn&rsquo;t want to live in a society where the only people allowed guns are the police and the military.”",
    name:	"William S. Burroughs"	},

    { quote: "“When you cut into the present, the future leaks out”",
    name:	"William S. Burroughs"	},

    { quote: "“NOTHING happens by coincidence.”",
    name:	"William S. Burroughs"	},

    { quote: "“A phenomenon must be to some extent comprehensible to be perceived at all.”",
    name:	"William S. Burroughs"	},

    { quote: "“Fear of death is form of stasis horrors. The dead weight of time.”",
    name:	"William S. Burroughs"	},

    { quote: "“He remembers his fathers last words: Stay out of churches, son. All they got a key to is the shit house. And swear to me you’ll never wear a lawman’s badge.”",
    name:	"William S. Burroughs"	},

    { quote: "“Shoot the bitch and write a book. That&rsquo;s what I did.”",
    name:	"William S. Burroughs"	},

    { quote: "“Human, Allen, is an adjective, and its use as a noun is in itself regrettable.”",
    name:	"William S. Burroughs"	},

    { quote: "“Everything Jack says is to be taken with considerable reserve.”",
    name:	"William S. Burroughs"	},

    { quote: "“I think anybody incapable of changing his mind is crazy.”",
    name:	"William S. Burroughs"	},

    { quote: "“The only possible ethic is to do what one wants to do.”",
    name:	"William S. Burroughs"	},

    { quote: "“Like many people who have nothing to do, he was very resentful of any claims on his time.”",
    name:	"William S. Burroughs"	},

    { quote: "“If you weren&rsquo;t surprised by your life you wouldn&rsquo;t be alive. Life is surprise.”",
    name:	"William S. Burroughs"	},

    { quote: "“I had the feeling that some horrible image was just beyond the field of vision, moving, as I turned my head, so that I never quite saw it.”",
    name:	"William S. Burroughs"	},

    { quote: "“Quien sabe? Not me. The older I get the less I sabe, the less wisdom, maturity and caution I have.”",
    name:	"William S. Burroughs"	},

    { quote: "“The self is like a pimping blackmailing chauffeur who gets you from here to there on word lines.”",
    name:	"William S. Burroughs"	},

    { quote: "“My greatest strength is to have a great capacity to confront myself no matter how unpleasant. My greatest weakness is that I don&rsquo;t. I know that&rsquo;s enigmatic, but that&rsquo;s sort of a general formula for anyone, actually.”",
    name:	"William S. Burroughs"	},

    { quote: "“The boys eat happily looking into each other’s eyes. Blood runs down their chins.”",
    name:	"William S. Burroughs"	},

    { quote: "“Death needs time for what it kills to grow in.”",
    name:	"William S. Burroughs"	},

    { quote: "“The simplest questions are the most difficult.”",
    name:	"William S. Burroughs"	},

    { quote: "“Like pregnant women lose their teeth feeding the stranger, junkies lose their yellow fangs feeding the monkey.”",
    name:	"William S. Burroughs"	},

    { quote: "“But you&rsquo;re an artist. You don&rsquo;t believe in decency and honesty and gratitude.”",
    name:	"William S. Burroughs"	},

    { quote: "“Intelligence and war are games, perhaps the only meaningful games left. If any player becomes too proficient, the game is threatened with termination.”",
    name:	"William S. Burroughs"	},

    { quote: "“In Mexico your wishes have a dream power. When you want to see someone, he turns up.”",
    name:	"William S. Burroughs"	},

    { quote: "“If you consider any set of data without a preconceived viewpoint, then a viewpoint will emerge from the data.”",
    name:	"William S. Burroughs"	},

    { quote: "“Hip - Someone who knows the score. Someone who understands 'jive talk.' Someone who is 'with it.' The expression is not subject to definition because, if you don&rsquo;t 'dig' what it means, no one can ever tell you.”",
    name:	"William S. Burroughs"	},

    { quote: "“Death was in every sell of his body. He gave off a faint, greenish steam of decay. Lee imagined he would glow in the dark.”",
    name:	"William S. Burroughs"	},

    { quote: "“But there are higher stakes than youth or Latah, games where only two players in the world know what the stakes are.”",
    name:	"William S. Burroughs"	},

    { quote: "“Well, as you can plainly see, the possibilities are endless like meandering paths in a great big beautiful garden.”",
    name:	"William S. Burroughs"	},

    { quote: "“Wouldn&rsquo;t you?”",
    name:	"William S. Burroughs"	},

    { quote: "“If the soft machine works, don&rsquo;t fix it. If it works, don&rsquo;t fix it.”",
    name:	"William S. Burroughs"	},

    { quote: "“The price an artist pays for doing what he wants is that he has to do it.”",
    name:	"William S. Burroughs"	},

    { quote: "“To my way of thinking the function of the poet is to make us aware of what we know and don&rsquo;t know we know.”",
    name:	"William S. Burroughs"	},

    { quote: "“Danger is a very rare commodity in these times, monopolized by intelligence agencies and stuntmen.”",
    name:	"William S. Burroughs"	},

    { quote: "“Control never be a means to any practical end. It can never be a means to anything but more control… Like punk.”",
    name:	"William S. Burroughs"	},

    { quote: "“The purpose of my writing is to expose and arrest Nova Criminals.”",
    name:	"William S. Burroughs"	},

    { quote: "“I&rsquo;m an old-fashioned person, and I don&rsquo;t like informers.”",
    name:	"William S. Burroughs"	},

    { quote: "“He was a sad poison nice guy more poison than nice.”",
    name:	"William S. Burroughs"	},

    { quote: "“Who was I? The stranger was footsteps in the snow a long time ago.”",
    name:	"William S. Burroughs"	},

    { quote: "“We intend to destroy all dogmatic verbal systems.”",
    name:	"William S. Burroughs"	},

    { quote: "“Some people like neat suburbs. I always am attracted to the rundown and the old and the offbeat.”",
    name:	"William S. Burroughs"	},

    { quote: "“Successful control means achieving a balance and avoiding a showdown where all-out force would be necessary.”",
    name:	"William S. Burroughs"	},

    { quote: "“The word has not been recognized as a virus because it has achieved a state of stable symbiosis with the host.”",
    name:	"William S. Burroughs"	},

    { quote: "“I would say for a great percentage of people, all they do is repeat their past. They really don&rsquo;t have a future at all.”",
    name:	"William S. Burroughs"	},

    { quote: "“How many years threaded on a needle of blood? Hands slack on lap he sits looking out at the winter dawn with the cancelled eyes of junk.”",
    name:	"William S. Burroughs"	},

    { quote: "“I was never tempted by any political program... I don&rsquo;t want to hear about the fucking masses and I never did.”",
    name:	"William S. Burroughs"	},

    { quote: "“What does she care for the atom bomb, the bedbugs, the cancer rent, Friendly Finance waiting to repossess her delinquent flesh… Sweet dreams, Pantopon Rose.”",
    name:	"William S. Burroughs"	},

    { quote: "“A psychotic is a guy who&rsquo;s just found out what&rsquo;s going on.”",
    name:	"William S. Burroughs"	},

    { quote: "“Anything that can be accomplished chemically can be accomplished in other ways.”",
    name:	"William S. Burroughs"	},

    { quote: "“Why are we here? We&rsquo;re here to go!”",
    name:	"William S. Burroughs"	},
    { quote:"“O, ah! The awareness of emptiness brings forth a heart of compassion!”",
    name:	"Gary Snyder"	},

    { quote:"“Nature is not a place to visit. It is home.”"	,
    name:	"Gary Snyder"	},

    { quote:"“There are those who love to get dirty and fix things. They drink coffee at dawn, beer after work. And those who stay clean, just appreciate things. At breakfast they have milk and juice at night. There are those who do both, they drink tea.”",
    name:	"Gary Snyder"	},

    { quote:"“Find your place on the planet. Dig in, and take responsibility from there.”"	,
    name:	"Gary Snyder"	},

    { quote:"“When the mind is exhausted of images, it invents its own.”"	,
    name:	"Gary Snyder"	},

    { quote:"“I try to hold both history and the wilderness in mind, that my poems may approach the true measure of things and stand against the unbalance and ignorance of our times.”"	,
    name:	"Gary Snyder"	},

    { quote:"“Three-fourths of philosophy and literature is the talk of people trying to convince themselves that they really like the cage they were tricked into entering.”",
    name:	"Gary Snyder"	},

    { quote:"“I see a vision of a great rucksack revolution thousands or even millions of young Americans wandering around with rucksacks, going up to mountains to pray, making children laugh and old men glad, making young girls happy and old girls happier, all of &rsquo;em Zen Lunatics who go about writing poems that happen to appear in their heads for no reason and also by being kind and also by strange unexpected acts keep giving visions of eternal freedom to everybody and to all living creatures.”",
    name:	"Gary Snyder"	},

    { quote:"“In Western Civilization, our elders are books.”",
    name:	"Gary Snyder"	},

    { quote:"“Nature is orderly. That which appears to be chaotic in nature is only a more complex kind of order.”"	,
    name:	"Gary Snyder"	},

    { quote:"“With no surroundings there can be no path, and with no path one cannot become free.”",
    name:	"Gary Snyder"	},

    { quote:"“Range after range of mountains. Year after year after year. I am still in love.”",
    name:	"Gary Snyder"	},

    { quote:"“I hold the most archaic values on earth ... the fertility of the soul, the magic of the animals, the power-vision in solitude.... the love and ecstasy of the dance, the common work of the tribe.”",
    name:	"Gary Snyder"	},

    { quote:"“Having a place means that you know what a place means...what it means in a storied sense of myth, character and presence but also in an ecological sense...Integrating native consciousness with mythic consciousness”",
    name:	"Gary Snyder"	},

    { quote:"“Clouds sink down the hills. Coffee is hot again. The dog turns and turns about, stops and sleeps.”",
    name:	"Gary Snyder"	},

    { quote:"“The other side of the “sacred” is the sight of your beloved in the underworld, dripping with maggots.”",
    name:	"Gary Snyder"	},

    { quote:"“In the 40,000 year time scale we&rsquo;re all the same people. We&rsquo;re all equally primitive, give or take two or three thousand years here or a hundred years there.”",
    name:	"Gary Snyder"	},

    { quote:"“Great Brown Bear is walking with us, Salmon swimming upstream with us, as we stroll a city street.”",
    name:	"Gary Snyder"	},

    { quote:"“I could almost love you again.”",
    name:	"Gary Snyder"	},

    { quote:"“Clarity, especially in poetry, requires conceiving of your work as a collaborative act of imagination with the audience, thus affording them the deepest respect.”",
    name:	"Gary Snyder"	},

    { quote:"“The world is our consciousness, and it surrounds us.”",
    name:	"Gary Snyder"	},

    { quote:"“the mind poet stays in the house / the house is empty and it has no walls / the poem is seen from all sides / everywhere / at once.”",
    name:	"Gary Snyder"	},

    { quote:"“White clouds gather and billow. Thin grass does for a mattress, The blue sky makes a good quilt. Happy with a stone underhead Let heaven and earth go about their changes.”",
    name:	"Gary Snyder"	},

    { quote:"“Each time you go that road it gets more straight.”",
    name:	"Gary Snyder"	},

    { quote:"“They should listen to the unsaid words that resonate around the edge of the poem.”",
    name:	"Gary Snyder"	},

    { quote:"“Spring-water in the green creek is clear Moonlight on Cold Mountain is white Silent knowledge—the spirit is enlightened of itself Contemplate the void: this world exceeds stillness.”",
    name:	"Gary Snyder"	},

    { quote:"“The tribes were Berkeley, North Beach, Big Sur, Marin County, Los Angeles, and the host, Haight-Ashbury.”",
    name:	"Gary Snyder"	}
];

  if (author) {
    quoteLibrary = quoteLibrary.filter(function(quote) {
      return quote.name === author;
    });
  }

// renderInitialQuote
// ------------------
// Renders a random quote on page load
function renderInitialQuote() {
  //define the containers of the info we target
  var quote = $('#quoteBox p').text();
  var author = $('#authorBox').text();

  //getting a new random number for quote generation
  var sourceLength = quoteLibrary.length;
  var randomNumber = Math.floor(Math.random()*sourceLength);

  //set a new quote by looping through library
  for(var i = 0; i <= sourceLength; i++){
    console.log(randomNumber);
    var newQuote  = quoteLibrary[randomNumber].quote;
    var newAuthor = quoteLibrary[randomNumber].name;

    //console.log(newQuote,newAuthor);
    var timeAnimation = 500;
    var quoteBox = $('#quoteBox');

    //fade out animation with callback
    quoteBox.fadeOut(timeAnimation, function(){
      quoteBox.html('');
      quoteBox.append('<p class="quote">'+newQuote+'</p>'+'<p id="authorBox" class="author">'+'-								'+newAuthor+'</p>');

      //fadein animation.
      quoteBox.fadeIn(timeAnimation);
    });

    break;
  };//end for loop
}

  renderInitialQuote(quoteLibrary);

  $('.bdata').click(function() {
    $('div', this).toggle();
  });


  $('#quoteButton').click(function(e) {
    e.preventDefault();
    renderInitialQuote();
  });//end quoteButton function

});//end document ready
