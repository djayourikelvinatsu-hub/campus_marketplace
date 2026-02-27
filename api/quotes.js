// Vercel Serverless Function to serve quotes
export default function handler(req, res) {
    res.status(200).json([
        { id: 1, text: "You will never be happy if you continue to search for what happiness consists of.", source: "Albert Camus, The Myth of Sisyphus" },
        { id: 2, text: "Should I kill myself, or have a cup of coffee?", source: "Albert Camus, Notebooks" },
        { id: 3, text: "Nobody realizes that some people expend tremendous energy merely to be normal.", source: "Albert Camus, Notebooks" },
        { id: 4, text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", source: "Albert Camus, The Rebel" },
        { id: 5, text: "I opened myself to the gentle indifference of the world.", source: "Albert Camus, The Stranger" },
        { id: 6, text: "Hell is other people.", source: "Jean-Paul Sartre, No Exit" },
        { id: 7, text: "Man is condemned to be free.", source: "Jean-Paul Sartre, Being and Nothingness" },
        { id: 8, text: "He who has a why to live for can bear almost any how.", source: "Friedrich Nietzsche, Twilight of the Idols" },
        { id: 9, text: "God is dead. God remains dead. And we have killed him.", source: "Friedrich Nietzsche, The Gay Science" },
        { id: 10, text: "To dare is to lose one's footing momentarily. Not to dare is to lose oneself.", source: "Søren Kierkegaard" },
        { id: 11, text: "Life can only be understood backwards; but it must be lived forwards.", source: "Søren Kierkegaard" },
        { id: 12, text: "One is not born, but rather becomes, a woman.", source: "Simone de Beauvoir, The Second Sex" },
        { id: 13, text: "Pain and suffering are always inevitable for a large intelligence and a deep heart.", source: "Fyodor Dostoevsky, Crime and Punishment" }
    ]);
}
