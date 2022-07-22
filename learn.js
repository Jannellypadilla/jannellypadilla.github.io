//fact generator code is written below//
var quoteList = ["Only about 20% of children with mental, emotional, or behavioral disorders receive care from a specialized mental health care provider",
                "The National Institutes of Health estimates 35 million people in the United States lack access to basic health insurance coverage",
                "Infant mortality rates are 2.5 times higher for African American infants than white infants",
                "The top 1 percent of Americans are expected to live 10 to 15 years longer than the bottom 1 percent of Americans",
                "About 1 in 10 people in the United States don’t have health insurance"];//add more facts and stats later//

var factButton = document.getElementById("factButton")
var facts = document.getElementById("facts")

var counter = 0;

factButton.addEventListener("click", displayQuote)

function displayQuote() {
  facts.innerHTML = quoteList[counter];
  counter += 1
  if (counter == quoteList.length) {
    counter = 0;
  }
}
