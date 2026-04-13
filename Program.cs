namespace EleicoesAPI.Models
{
    public class Eleicao
    {
        public int Id { get; set; }
        public string NomeCandidato { get; set; }
        public string Partido { get; set; }
        public string Cargo { get; set; }
        public string Estado { get; set; }
        public int Votos { get; set; }
        public double Percentual { get; set; }
        public int Turno { get; set; }
    }
}