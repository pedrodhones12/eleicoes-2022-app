<?php
require_once 'conexao.php';

$method = $_SERVER['REQUEST_METHOD'];

// Rota GET - Buscar todos os dados
if ($method === 'GET') {
    try {
        $stmt = $pdo->query("SELECT * FROM EstadosEleicao ORDER BY NomeEstado");
        $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'total' => count($dados),
            'dados' => $dados
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'erro' => $e->getMessage()]);
    }
}

// Rota POST - Adicionar novo estado
elseif ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $sql = "INSERT INTO EstadosEleicao 
            (NomeEstado, Eleitorado, Abstenção, PercentualAbstenção, VotosLula, PercentualLula, VotosBolsonaro, PercentualBolsonaro, VotosBrancos, PercentualBrancos, VotosNulos, PercentualNulos) 
            VALUES 
            (:nome, :eleitorado, :abstencao, :percAbst, :votosLula, :percLula, :votosBolso, :percBolso, :votosBrancos, :percBrancos, :votosNulos, :percNulos)";
    
    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':nome' => $input['nome'],
            ':eleitorado' => $input['eleitorado'],
            ':abstencao' => $input['abstencao'],
            ':percAbst' => $input['percAbstencao'],
            ':votosLula' => $input['votosLula'],
            ':percLula' => $input['percLula'],
            ':votosBolso' => $input['votosBolsonaro'],
            ':percBolso' => $input['percBolsonaro'],
            ':votosBrancos' => $input['votosBrancos'],
            ':percBrancos' => $input['percBrancos'],
            ':votosNulos' => $input['votosNulos'],
            ':percNulos' => $input['percNulos']
        ]);
        
        echo json_encode(['success' => true, 'mensagem' => 'Estado adicionado com sucesso']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'erro' => $e->getMessage()]);
    }
}
?>