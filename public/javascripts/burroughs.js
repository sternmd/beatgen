$(document).ready(function(){
var burroughsLibrary = [
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
  ];
